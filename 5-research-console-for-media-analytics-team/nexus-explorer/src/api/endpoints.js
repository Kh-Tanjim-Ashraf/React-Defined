const BASE_URL = "https://rickandmortyapi.com/api";

export const endpoints = {
  characters: `${BASE_URL}/character`,
  charactersFiltered: (param, value) =>
    `${BASE_URL}/character/?${param}=${value}`,
  character: (id) => `${BASE_URL}/character/${id}`,
};
