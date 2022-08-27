export default function infoFilm() {
   const refs = {
    openModalBtn: document.querySelector("[data-gallery]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
   }
   refs.openModalBtn.addEventListener("click", onOpenModalBtnClick);
   refs.closeModalBtn.addEventListener("click", oncloseModalBtnClick);
   window.addEventListener("click", onWindowClick)
   document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
      refs.modal.style.display = "none"
    }
  });

   function onOpenModalBtnClick(){
      refs.modal.style.display = "block"
   }
   function oncloseModalBtnClick() {
   refs.modal.style.display = "none"
   }
   function onWindowClick(event) {
    if(event.target === refs.modal) {
      refs.modal.style.display = "none"
    }
   }

  // function onCardFilmClick(id, isFilm) {
  //   if(isFilm) {
  //     let localStorageData = [...JSON.parse(localStorage.getItem("[data-gallery]"))];
      
  //   } 
  //   console.log(localStorageData);
  // }
  
} 