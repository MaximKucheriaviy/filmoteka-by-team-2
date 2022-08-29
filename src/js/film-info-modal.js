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
    if(target){
      refs.modal.style.display = "block";
    }
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