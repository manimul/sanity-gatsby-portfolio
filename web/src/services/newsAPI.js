// services/newsAPI.js
import axios from "axios";

const API_BASE_URL = "https://newsapi.org/v2";
const API_KEY = "adc1f34cae094fc6b58230d1f77e3ebe";

export const fetchTopHeadlines = async query => {
  return axios.get(`${API_BASE_URL}/top-headlines?q=${query}&apiKey=${API_KEY}`);
};

export const fetchEverything = async query => {
  return axios.get(`${API_BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
};

//curl -H "X-AYLIEN-NewsAPI-Application-ID: 5bb80b18" -H "X-AYLIEN-NewsAPI-Application-Key: 886c9036acb750fe9f5f13173a612926" "https://api.aylien.com/news/stories?title=sarkodie&language=en&sort_by=relevance" | jq .

