(() => {
  const refs = {
    openModalBtn: document.querySelector("[open-modal]"),
    
    closeModalBtn: document.querySelector("[close]"),
    modal: document.querySelector("[modal]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
 
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})(); 