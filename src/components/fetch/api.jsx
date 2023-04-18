import axios from 'axios';

const SEARCH_PARAMS = new URLSearchParams({
  safesearch: 'true',
});
export async function fetchTitles(page) {
  const BASE_URL = `https://6438413f4660f26eb198c6ce.mockapi.io/users`;
  try {
    const titles = await axios.get(`${BASE_URL}?${SEARCH_PARAMS}`);
    return titles;
  } catch (error) {
    throw new Error(console.log(error));
  }
}
