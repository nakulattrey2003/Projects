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
        header.style.background = '#E9EDFF';
        header.style.zIndex = '1000';
    }
    else
    {
        header.style.backgroundColor = 'transparent';
        header.style.zIndex = 'initial';
    }
});

// Tyepwriter
const text = document.querySelector(".type1");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Models";
    }, 0);
    setTimeout(() => {
        text.textContent = "Prices";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Deals";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Colors";
    }, 12000);
};

textLoad();
setInterval(textLoad,12000);
