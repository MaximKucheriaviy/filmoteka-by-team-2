export default function infoFilm() {
   const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
   }
   openModalBtn.addEventListener("click", toggleModal);
   closeModalBtn.addEventListener("click", toggleModal);

   function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    console.log("Backdrop is hidden");
  }

}