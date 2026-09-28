import { request } from "./api.client";

// Login
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

// Register
export function register(newAccnt) {
  return request("POST", "/auth/register", newAccnt, false);
}

// About Me/User Profile
export function aboutMe() {
  return request("GET", "/auth/me");
}
