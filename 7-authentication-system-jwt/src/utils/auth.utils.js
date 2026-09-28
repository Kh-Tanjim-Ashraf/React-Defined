const AUTH_TOKENS = "auth_tokens";
const AUTH_USER = "auth_user";

export function saveLogin(token, user) {
  localStorage.setItem(AUTH_TOKENS, JSON.stringify(token));
  localStorage.setItem(AUTH_USER, JSON.stringify(user));
}

export function getTokens() {
  return localStorage.getItem(AUTH_TOKENS);
}

export function getUser() {
  return localStorage.getItem(AUTH_USER);
}

export function clearLogin() {
  localStorage.removeItem(AUTH_TOKENS);
  localStorage.removeItem(AUTH_USER);
}
