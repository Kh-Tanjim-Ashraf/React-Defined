import { getTokens } from "../utils/auth.utils";

const BASE_URL = "https://dummyjson.com";

// Dynamic function
export async function request(method, path, body, useToken = true) {
  const headers = {
    "content-type": "application/json",
  };

  if (useToken) {
    const token = getTokens();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response);
  }

  return response.json();
}
