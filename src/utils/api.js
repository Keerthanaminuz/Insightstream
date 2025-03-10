import axios from 'axios';

const API_KEY = '60a86d1d7e7545aaa910258388ecd7c1'; // Replace with your NewsAPI key

export const fetchTopNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
