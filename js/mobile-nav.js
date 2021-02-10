const burger = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

burger.addEventListener('click', event =>{
  document.body.classList.toggle('show-nav--mobile');
});
