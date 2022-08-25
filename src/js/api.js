// "Это то, что нужно запихнуть в index.js"

// import API from './js/API';

// Запрос на первую страницу (page=1) популярных фильмов при первой загрузке страницы
// В ответ получаем массив обьектов response.data.results

// API.fetchTrendingMovies(1).then(response => console.log(response.data.results));

// Запрос на массив жанров

// API.fetchGenres().then(response => console.log(response.data.genres));

// Запрос на фильм по ключевому слову

// API.fetchSearchByQuery('batman', 1).then(response =>
//   console.log(response.data.results)
// );

// "Это то, что нужно запихнуть в index.js"

// А это то, что останется здесь

import axios from 'axios';

export default class API {
  static API_KEY = 'b01160fe65872b7102c85dbc7141a795';
  static BASE_URL_TRENDING = 'https://api.themoviedb.org/3/trending/all/day';
  static BASE_URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list';
  static BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

  static async fetchTrendingMovies(page) {
    try {
      const data = axios.get(this.BASE_URL_TRENDING, {
        params: { api_key: this.API_KEY, page },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchGenres() {
    try {
      const data = axios.get(this.BASE_URL_GENRES, {
        params: { api_key: this.API_KEY },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchSearchByQuery(query, page) {
    try {
      const data = axios.get(this.BASE_URL_SEARCH, {
        params: { api_key: this.API_KEY, query, page },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
