import axios from "axios";

axios.defaults.baseURL = "https://6489a4595fa58521caaffc40.mockapi.io";

export async function apiService(_, page) {
  
  const cards = await axios.get(
    `${axios.defaults.baseURL}/tweets-followers?limit=3&page=${page}`
  );

  return cards.data;
}
