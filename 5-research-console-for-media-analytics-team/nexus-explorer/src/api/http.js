export async function get(url, options = {}) {
  const response = await fetch(url, {
    method: "GET",
    ...options,
  }); // Defined `await` since the response might delay for various factors

  if (!response.ok) throw new Error(`Request failed: ${response.status}`);

  return await response.json(); // Since the response might delay, thus defined `await` to convert the JSON-object literal into native JS object
}
