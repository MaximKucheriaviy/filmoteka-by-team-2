import {setFilmToWeched, setFilmToQueue, removeFilmToWeched, removeFilmToQueue} from "./filmssetToLS";

export default function infoFilm() {
   const refs = {
    galleryEl: document.querySelector("[data-gallery]"),
    openModal: document.querySelector(".gallery-button"),
    closeModal: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
   }
   refs.galleryEl.addEventListener("click", onOpenModalBtnClick);
   refs.closeModal.addEventListener("click", oncloseModalBtnClick);
   window.addEventListener("click", onWindowClick)
   document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      refs.modal.style.display = "none"
    }
  });

   function onOpenModalBtnClick(e){
    const target = e.target.closest('[data-click]');
    if(!target){
      return;
    }
    refs.modal.style.display = "block";
    const film = findFilmById(Number.parseInt(target.dataset.id));
    createModalMucrup(film);
  }
   function oncloseModalBtnClick() {
   refs.modal.style.display = "none"
   }
   function onWindowClick(event) {
    if(event.target === refs.modal) {
      refs.modal.style.display = "none"
    }
   }

  function createMarkupFilmCard(id) {
      let localStorageData = [...JSON.parse(localStorage.getItem("reneredCards"))];
      localStorageData.find( element =>
        element.id === id
      )
    
    console.log(localStorageData);
  }
  
} 



function createModalMucrup(filmInfo){
  const filmContainer = document.querySelector('.film-container');
  const b1 = document.querySelector('#addWatchedButton');
  const b2 = document.querySelector('#addWatchedButton');

  if(b1){
    b1.remove('click', onAddWatchedButton);
  }
  if(b2){
    b2.remove('click', onAddQueueButton);
  }
  const referense = `
  <div class="image-film-container">
      <img class = "film-image" src="https://image.tmdb.org/t/p/w500${filmInfo.backdrop_path}" alt="POSTER">
  </div>
  <div class="film-about-container">
      <h2 class="film-title">${ filmInfo.original_title || filmInfo.name}</h2>

      <table class="film-about-table">
        <tr class="film-about-textrow">
          <td>vote/votes</td>
          <td id=""><span class="inbox-id">${filmInfo.vote_average}</span>${filmInfo.vote_count}</td>
        </tr>
        <tr class="film-about-textrow">
          <td>popularity</td>
          <td id="">${filmInfo.popularity}</td>
        </tr>
        <tr class="film-about-textrow">
          <td>original title</td>
          <td id="">${filmInfo.original_title || filmInfo.name}</td>
        </tr>
        <tr class="film-about-textrow">
          <td>genre</td>
          <td id="">${filmInfo.genre_ids}</td>
        </tr>
      </table>
      <h3 class="title-about">About</h3>
      <p id="" class="film-about-text">${filmInfo.overview}</p>
      <ul class="film-btn-list">
          <li>
              <button id="addWatchedButton" data-id = ${filmInfo.id} class="film-add-button">Add to
              watched</button>
          </li>
          <li>
              <button id="addQueueButton" data-id = ${filmInfo.id} class="film-add-button">Add to
              queue</button>
          </li>
      </ul>`

      filmContainer.innerHTML = referense;
      document.querySelector('#addWatchedButton').addEventListener('click', onAddWatchedButton);
      document.querySelector('#addQueueButton').addEventListener('click', onAddQueueButton);
}

function findFilmById(id){
  const reneredCards = JSON.parse(localStorage.getItem('reneredCards'));
  return reneredCards.find(item => item.id === id);
}

function onAddQueueButton(event){
  const id = Number.parseInt(event.target.dataset.id);
  setFilmToQueue(id);
}

function onAddWatchedButton(event){
  const id = Number.parseInt(event.target.dataset.id);
  setFilmToWeched(id);
}