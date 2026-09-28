import { clearLogin, getTokens, saveTokens } from "../utils/auth.utils";

const BASE_URL = "https://dummyjson.com";
let refreshPromise;

async function refreshTokens() {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      const tokens = getTokens();

      if (!tokens?.refreshToken) {
        clearLogin();
        throw new Error("Session expired. Please log in again.");
      }

      const response = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ refreshToken: tokens.refreshToken }),
      });

      if (!response.ok) {
        clearLogin();
        throw new Error("Session expired. Please log in again.");
      }

      const refreshedTokens = await response.json();
      if (!refreshedTokens.accessToken || !refreshedTokens.refreshToken) {
        clearLogin();
        throw new Error("The refresh response did not include new tokens.");
      }

      const nextTokens = {
        accessToken: refreshedTokens.accessToken,
        refreshToken: refreshedTokens.refreshToken,
      };
      saveTokens(nextTokens);
      return nextTokens;
    })().finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
}

function sendRequest(method, path, body, accessToken) {
  const headers = { "content-type": "application/json" };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  return fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });
}

// Dynamic function
export async function request(method, path, body, useToken = true) {
  const initialTokens = useToken ? getTokens() : null;
  const initialAccessToken = initialTokens?.accessToken;
  let response = await sendRequest(method, path, body, initialAccessToken);

  if (useToken && response.status === 401) {
    let currentTokens = getTokens();

    if (currentTokens?.accessToken === initialAccessToken) {
      currentTokens = await refreshTokens();
    }

    if (!currentTokens?.accessToken) {
      clearLogin();
      throw new Error("Session expired. Please log in again.");
    }

    response = await sendRequest(method, path, body, currentTokens.accessToken);

    if (response.status === 401) {
      clearLogin();
    }
  }

  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
