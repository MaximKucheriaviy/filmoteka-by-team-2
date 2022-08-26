export default function infoFilm() {
   const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
   }
   refs.openModalBtn.addEventListener("click", onOpenModalBtnClick);
   refs.closeModalBtn.addEventListener("click", oncloseModalBtnClick);
   window.addEventListener("click", onWindowClick)

  //  function toggleModal() {
  //   refs.modal.classList.toggle("is-hidden");
  //   console.log("Backdrop is hidden");
  // }
  
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
}