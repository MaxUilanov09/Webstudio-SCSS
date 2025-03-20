(() => {
    const refs = {
      openModalBtn: document.querySelector("[button-modal-open]"),
      closeModalBtn: document.querySelector("[button-modal-close]"),
      closeModalBtn2: document.querySelector("[button-modal-close2]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn2.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
      console.log("WHHHYYY")
    }
  })();