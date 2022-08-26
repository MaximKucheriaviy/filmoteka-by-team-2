
import infoFilm from "./js/film-info-modal"; 
infoFilm();

import API from "./js/api";
import createMarcupGallery from "./js/createMarcupGallery";
import PaginationSystem from "./js/paginationSyste";

const paginationSystem = new PaginationSystem();
paginationSystem.setTotalItems(1000);
paginationSystem.setPage(9);

const refs = {
    cardList: document.querySelector('[data-gallery]')
}

API.fetchTrendingMovies(1)
.then(response => {
    console.log(response.data.results);
    refs.cardList.innerHTML =  createMarcupGallery(response.data.results);
});

