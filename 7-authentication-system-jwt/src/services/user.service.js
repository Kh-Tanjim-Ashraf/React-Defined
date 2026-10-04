import { request } from "./api.client";

export function userList(limit = 20, skip = 0) {
  return request("GET", `/users?limit=${limit}&skip=${skip}`, false);
}
