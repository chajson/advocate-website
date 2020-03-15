
const burger = document.querySelector('.hamburger');
const menuLinks = document.querySelectorAll('.menuLink');

const map = L.map('mapid').setView([50.882686, 20.597110], 13);
 L.marker([50.882686, 20.597110]).addTo(map);

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500
});

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
