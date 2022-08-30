import infoFilm from './js/film-info-modal';
import API from './js/api';
import {createMarcupGallery,createMarcupGalleryAlt} from './js/createMarcupGallery';
import PaginationSystem from './js/paginationSyste';
import screnLoaderTogle from './js/screenloader';
import meaningForm from "./js/meaningForm";


infoFilm();
import meaningForm from "./js/meaningForm";
meaningForm ();
const paginationSystem = new PaginationSystem();

const refs = {
  cardList: document.querySelector('[data-gallery]'),
  searchForm :document.querySelector('.search-form')
};

API.fetchTrendingMovies(1, screnLoaderTogle)
.then(response => {
  console.log(response.data);
  refs.cardList.innerHTML = createMarcupGallery(response.data.results);
  paginationSystem.setTotalPages(response.data.total_pages);
  paginationSystem.setPage(1);
})
.finally(() => {
    screnLoaderTogle();
})


paginationSystem.mainList.addEventListener(
  'pagination-system-clicked',
  event => {
    API.fetchSearchByPagination(paginationSystem.page, screnLoaderTogle).then(response => {
      refs.cardList.innerHTML = '';
      refs.cardList.append(...createMarcupGalleryAlt(response.data.results));
    })
    .finally(() => {
        screnLoaderTogle();
    })
  }
);

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  API.fetchSearchByQuery(meaningForm(), 1, screnLoaderTogle)
  .then(response => {
    console.log(response.data);
    refs.cardList.innerHTML = createMarcupGallery(response.data.results);
    paginationSystem.setTotalPages(response.data.total_pages);
    paginationSystem.setPage(1);
  })
  .finally(() => {
      screnLoaderTogle();
  })
})


