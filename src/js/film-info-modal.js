import {setFilmToWeched, setFilmToQueue, removeFilmToWeched, removeFilmToQueue} from "./filmssetToLS";
import findJanres from "./findJanreWithId";

const modalButtonClick = new Event('modalButtonClick');

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
  const b3 = document.querySelector('#removeWatchedButton');
  const b4 = document.querySelector('#removeQueueedButton');

  if(b1){
    b1.remove('click', onAddWatchedButton);
  }
  if(b2){
    b2.remove('click', onAddQueueButton);
  }
  if(b3){
    b1.remove('click', onDeleteWatchedButton);
  }
  if(b4){
    b2.remove('click', onDeleteQueuedButton);
  }
  filmInfo.genre_ids = filmInfo.genre_ids.map(item => findJanres(item));
  if(filmInfo.genre_ids.length > 2){
    filmInfo.genre_ids = filmInfo.genre_ids.slice(0, 2);
    filmInfo.genre_ids.push('other');
  }
  filmInfo.genre_ids = filmInfo.genre_ids.join(" ");
  const referense = `
  <div class="image-film-container">
      <img class = "film-image" src="https://image.tmdb.org/t/p/w500${filmInfo.poster_path}" alt="POSTER">
  </div>
  <div class="film-about-container">
      <h2 class="film-title">${ filmInfo.original_title || filmInfo.name}</h2>

      <table class="film-about-table">
        <tr class="film-about-textrow">
          <td>vote / votes</td>

          <td class="textrow-id"><span class="inbox-id">${filmInfo.vote_average}</span><span class= "inbox-slash"> /</span><span class = "inbox-span">${filmInfo.vote_count}</span></td>

        </tr>
        <tr class="film-about-textrow">
          <td>popularity</td>
          <td class="textrow-id">${filmInfo.popularity.toFixed(2)}</td>
        </tr>
        <tr class="film-about-textrow">
          <td>original title</td>
          <td class="textrow-id" id="">${filmInfo.original_title || filmInfo.name}</td></span>
        </tr>
        <tr class="film-about-textrow">
          <td>genre</td>
          <td class="textrow-genres">${filmInfo.genre_ids}</td>
        </tr>
      </table>
      <h3 class="title-about">About</h3>
      <p id="" class="film-about-text">${filmInfo.overview}</p>
      <ul class="film-btn-list">

          <li class="film-btn-item addWatchedButton">
              <button id="addWatchedButton" data-id = ${filmInfo.id} class="film-add-button">Add to
              watched</button>
          </li>
          <li class="film-btn-item removeWatchedButton">
          <button id="removeWatchedButton" data-id = ${filmInfo.id} class="film-add-button">Remove to
          watched</button>
          </li>
          <li class="film-btn-item addQueueButton">
              <button id="addQueueButton" data-id = ${filmInfo.id} class="film-add-button">Add to

              queue</button>
          </li>
          <li class="film-btn-item removeQueueButton">
          <button id="removeQueueButton" data-id = ${filmInfo.id} class="film-add-button">Remove to

          queue</button>
      </li>
      </ul>`

      filmContainer.innerHTML = referense;
      document.querySelector('#addWatchedButton').addEventListener('click', onAddWatchedButton);
      document.querySelector('#addQueueButton').addEventListener('click', onAddQueueButton);
      document.querySelector('#removeWatchedButton').addEventListener('click', onDeleteWatchedButton);
      document.querySelector('#removeQueueButton').addEventListener('click', onDeleteQueuedButton);
      

      updateButtons(filmInfo.id);
}

function findFilmById(id){
  const reneredCards = JSON.parse(localStorage.getItem('reneredCards'));
  return reneredCards.find(item => item.id === id);
}

function onAddQueueButton(event){
  const id = Number.parseInt(event.target.dataset.id);
  setFilmToQueue(id);
  updateButtons(id)
  window.dispatchEvent(modalButtonClick);
}

function onAddWatchedButton(event){
  const id = Number.parseInt(event.target.dataset.id);
  setFilmToWeched(id);
  updateButtons(id)
  window.dispatchEvent(modalButtonClick);
}

function onDeleteWatchedButton(event){
  const id = Number.parseInt(event.target.dataset.id);
  removeFilmToWeched(id);
  updateButtons(id)
  window.dispatchEvent(modalButtonClick);
}

function onDeleteQueuedButton(event){
  const id = Number.parseInt(event.target.dataset.id);
  removeFilmToQueue(id);
  updateButtons(id)
  window.dispatchEvent(modalButtonClick);
}


function updateButtons(id){
  console.log(id);
  const b1 = document.querySelector('.addWatchedButton');
  const b2 = document.querySelector('.removeWatchedButton');
  const b3 = document.querySelector('.addQueueButton');
  const b4 = document.querySelector('.removeQueueButton');


  const wached = JSON.parse(localStorage.getItem('wachedFilms'));
  const queue = JSON.parse(localStorage.getItem('queueFilms'));

  if(wached && wached.length !== 0 && wached.some(item => item.id === id)){
    b1.style.display = "none";
    b2.style.display = "block";
  }
  else{
    b2.style.display = "none";
    b1.style.display = "block";
  }

  if(queue && queue.length !== 0 && queue.some(item => item.id === id)){
    b3.style.display = "none";
    b4.style.display = "block";
  }
  else{
    b4.style.display = "none";
    b3.style.display = "block";
  }
}

// function changeBtn(id) {
//   const filmId = Number.parseInt(event.target.dataset.id)
//   const filmWatched = JSON.parse(localStorage.getItem("renderedCards"));
//   const result = filmWatched.find(item => item.id === filmId)
//   if(result) {
//     onAddWatchedButton()
//   }
//     onAddQueueButton()
// }