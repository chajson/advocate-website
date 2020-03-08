

const burger = document.querySelector('.hamburger');
burger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation');
    burger.classList.toggle('is-active');
    burger.classList.toggle('activeHamb');
    document.querySelector('body').classList.toggle('navigation-active');
    nav.classList.toggle('hidden');
});

