import API from "./js/api";
import createMarcupGallery from "./js/createMarcupGallery";

const refs = {
    cardList: document.querySelector('[data-gallery]')
}

API.fetchTrendingMovies(1)
.then(response => {
    console.log(response.data.results);
    refs.cardList.innerHTML =  createMarcupGallery(response.data.results);
});
