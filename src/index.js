(() => {
  const menuOverlay = document.querySelector('.header__menu-mobile');
  const closeMenuButton = document.querySelector('.header__exit-btn');
  const openMenuBtn = document.querySelector('.header__mobile-btn');
  openMenuBtn.addEventListener('click', e => {
    menuOverlay.classList.remove('d-none');
  });
  closeMenuButton.addEventListener('click', e => {
    menuOverlay.classList.add('d-none');
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-tablet]'),
    closeModalBtn: document.querySelector('[data-modal-close-tablet]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
