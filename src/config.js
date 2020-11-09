// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const SEARCH_ACTOR_URL = "https://www.themoviedb.org/person/";
// const SEARCH_ACTOR_URL = `${API_URL}person/api_key=${API_KEY}&language=en-US&id=`;
// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

// moive and tv shows genres
const GENRES = {
  28: 'Action',
  10759: 'Action & Adventure',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10762: 'Kids',
  10402: 'Music',
  9648: 'Mystery',
  10763: 'News',
  10749: 'Romance',
  878: 'Science Fiction',
  10765: 'Sci-Fi & Fantasy',
  10766: 'Soap',
  10767: 'Talk',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  10768: 'War & Politics',
  37: 'Western'
}

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  SEARCH_ACTOR_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  GENRES
};
