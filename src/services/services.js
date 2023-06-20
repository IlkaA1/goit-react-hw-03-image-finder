import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = 'key=35825821-f8211c879ddd9906fcf28e8e5';

export const fetchArticlesWithQuery = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return await response;
};
