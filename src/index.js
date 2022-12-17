const menuOverlay = document.querySelector('.header__mobile-menu');
const closeMenuButton = document.querySelector('.header__exit-btn');
const openMenuBtn = document.querySelector('.header__mobile-btn');

openMenuBtn.addEventListener('click', e => {
  menuOverlay.classList.remove('d-none');
});

closeMenuButton.addEventListener('click', e => {
  menuOverlay.classList.add('d-none');
});
