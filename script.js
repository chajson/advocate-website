
const burger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.menuLink');

const map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);


burger.addEventListener("click",function() {
  burger.classList.toggle('is-active');
  document.querySelector('.overlay').classList.toggle('open');
  document.querySelector('body').classList.toggle('stopScroll');
  document.querySelector('.arrow').classList.toggle('hiddenDisplay');
});

menuLinks.forEach(link => link.addEventListener("click",function() {
  burger.classList.toggle('is-active');
  document.querySelector('.overlay').classList.toggle('open');
  document.querySelector('body').classList.toggle('stopScroll');
  document.querySelector('.arrow').classList.toggle('hiddenDisplay');
}));
