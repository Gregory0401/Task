import axios from "axios";

export async function fetchTitles(page) {
  const BASE_URL = `http://6438413f4660f26eb198c6ce.mockapi.io/users`;
  try {
    const titles = await axios.get(`${BASE_URL}`);
    return titles;
  } catch (error) {
    throw new Error(console.log(error));
  }
}
