
import onLoad from "./js/screenloader"
import infoFilm from "./js/film-info-modal";
import API from "./js/api";
import {createMarcupGallery, createMarcupGalleryAlt} from "./js/createMarcupGallery";
import PaginationSystem from "./js/paginationSyste";

infoFilm();





const paginationSystem = new PaginationSystem();

const refs = {
  cardList: document.querySelector('[data-gallery]'),
};

API.fetchTrendingMovies(1).then(response => {
  console.log(response.data);
  refs.cardList.innerHTML = createMarcupGallery(response.data.results);
  paginationSystem.setTotalPages(response.data.total_pages);
  paginationSystem.setPage(1);
});

paginationSystem.mainList.addEventListener(
  'pagination-system-clicked',
  event => {
    API.fetchTrendingMovies(paginationSystem.page).then(response => {
      refs.cardList.innerHTML = '';
      refs.cardList.append(...createMarcupGalleryAlt(response.data.results));
    });
  }
);
