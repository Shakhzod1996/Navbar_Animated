let navbarBtn = document.querySelector('.navbar-btn');
let navbarLinks = document.querySelector('.navbar-links');

navbarBtn.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('navbar-links-active');
    navbarBtn.classList.toggle('change');
})