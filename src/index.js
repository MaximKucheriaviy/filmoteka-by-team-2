import infoFilm from './js/film-info-modal';
import API from './js/api';
import {createMarcupGallery,createMarcupGalleryAlt} from './js/createMarcupGallery';
import PaginationSystem from './js/paginationSyste';
import screnLoaderTogle from './js/screenloader';


infoFilm();

const paginationSystem = new PaginationSystem();

const refs = {
  cardList: document.querySelector('[data-gallery]'),
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
    API.fetchTrendingMovies(paginationSystem.page, screnLoaderTogle).then(response => {
      refs.cardList.innerHTML = '';
      refs.cardList.append(...createMarcupGalleryAlt(response.data.results));
    })
    .finally(() => {
        screnLoaderTogle();
    })
  }
);
