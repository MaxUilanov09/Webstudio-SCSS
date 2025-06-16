(() => {
    const refs = {
      openModalBtn: document.querySelector("[button-modal-open]"),
      closeModalBtn: document.querySelector("[button-modal-close]"),
      closeModalBtn2: document.querySelector("[button-modal-close2]"),
      modal: document.querySelector("[data-modal]"),
      openMenuBtn: document.querySelector("[button-menu-open]"),
      closeMenuBtn: document.querySelector("[button-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn2.addEventListener("click", toggleModal);
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleModal() {
      refs.modal.classList.toggle("is__hidden");
      document.body.classList.toggle("no-scroll");
      console.log("WHHHYYY")
    }

    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();