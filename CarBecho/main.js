// Search Box
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// Menu
let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 100);
    if(window.scrollY > 100)
    {
        header.style.background = 'white';
        header.style.zIndex = '1000';
    }
    else
    {
        header.style.backgroundColor = 'transparent';
        header.style.zIndex = 'initial';
    }
});