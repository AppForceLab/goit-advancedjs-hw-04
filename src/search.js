import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36804673-b7c86e83fae38f10ed9b56d3d';

const PARAMS = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function getSearchUrl(params) {
  return BASE_URL + '?' + params;
}

function getParams(query, template) {
  template.q = query;
  return new URLSearchParams(template);
}

async function fetchUrl(query, searchTemplate = { key: API_KEY }) {
  try {
    const params = getParams(query, searchTemplate);
    const data = await axios.get(getSearchUrl(params));
    return data;
  } catch (error) {
    // Handle error, log it, or throw a custom error
    console.error('Error fetching data:', error.message);
    throw new Error('An error occurred while fetching data.');
  }
}

export function findImages(searchQuery, per_page = 20, page = 1) {
  PARAMS.per_page = per_page;
  PARAMS.page = page;
  return fetchUrl(searchQuery, PARAMS);
}
