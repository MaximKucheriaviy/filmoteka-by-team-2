import axios from 'axios';

export default class API {
  static API_KEY = 'b01160fe65872b7102c85dbc7141a795';
  static BASE_URL_TRENDING = 'https://api.themoviedb.org/3/trending/all/day';
  static BASE_URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list';
  static BASE_URL_SEARCH = 'https://api.themoviedb.org/3/search/movie';

  // static LAST_URL = '';

  static async fetchTrendingMovies(page, screenloaderShow) {
    try {
      screenloaderShow();
      const data = await axios.get(this.BASE_URL_TRENDING, {
        params: { api_key: this.API_KEY, page },
      });
      // this.saveLastUrl(
      //   `${this.BASE_URL_TRENDING}?api_key=${this.API_KEY}&page=${page}`
      // );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchGenres() {
    try {
      const data = await axios.get(this.BASE_URL_GENRES, {
        params: { api_key: this.API_KEY },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchSearchByQuery(query, page, screenloaderShow) {
    try {
      screenloaderShow();
      const data = await axios.get(this.BASE_URL_SEARCH, {
        params: { api_key: this.API_KEY, query, page },
      });
      // this.LAST_URL = `${this.BASE_URL_SEARCH}?api_key=${this.API_KEY}&query=${query}&page=${page}`;
      // ВОТ ЭТО ТОТ URL запрос который нужен, по идее.
      // console.log(this.LAST_URL);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

// Пришлось создать запрос по поиску пользователя, чтобы написать нужную функцию.

import { createMarcupGallery } from './createMarcupGallery';
import PaginationSystem from './paginationSyste';
const paginationSystem = new PaginationSystem();

const cardList = document.querySelector('[data-gallery]');

const formEl = document.getElementById('search-form');

let URL = '';
function onSearchSubmit(event) {
  event.preventDefault();
  cardList.innerHTML = '';
  //!!! КОНКРЕТНО ЗДЕСЬ ВЫТЯГИВАЕТСЯ ПОСЛЕДНИЙ URL !!!
  API.fetchSearchByQuery(event.target.elements.searchQuery.value, 1).then(
    data => {
      URL = data.request.responseURL;
      cardList.innerHTML = createMarcupGallery(data.data.results);
      paginationSystem.setTotalPages(data.data.total_pages);
      paginationSystem.setPage(1);
    }
  );
}
console.log(URL);

formEl.addEventListener('submit', onSearchSubmit);
