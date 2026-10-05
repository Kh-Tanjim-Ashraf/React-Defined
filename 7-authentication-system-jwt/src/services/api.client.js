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

function sendRequest(method, path, body = {}, accessToken) {
  // console.log("function invoked!");

  const headers = { "content-type": "application/json" };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  // `body` is not required to make GET request
  if (body && Object.keys(body).length) {
    // console.log("function has body!");

    return fetch(`${BASE_URL}${path}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });
  } else {
    // console.log("function doesn't have a body!");

    const data = fetch(`${BASE_URL}${path}`, {
      method,
      headers,
    });

    // console.log("data", data);

    return data;
  }
}

// Dynamic function
export async function request(method, path, body = {}, useToken = true) {
  const initialTokens = useToken ? getTokens() : null;
  // console.log("token:", initialTokens?.accessToken);
  // console.log("method:", method);
  // console.log("path:", path);
  // console.log("body:", body);

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
