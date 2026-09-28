import { request } from "./api.client";

export function login(username, password, expiresInMins = 30) {
  return request(
    "POST",
    "/auth/login",
    {
      username: username,
      password: password,
      expiresInMins: expiresInMins, // Optional in backend
    },
    false,
  );
}

export function register(newAccnt) {
  return request("POST", "/auth/register", newAccnt, false);
}
