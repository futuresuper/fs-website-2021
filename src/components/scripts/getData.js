export async function getData(url = "") {
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}
