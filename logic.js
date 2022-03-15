let readMore = document.querySelector('.more');
let moreButton = document.querySelector('.moreButton');
const menuBar = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenu = document.querySelector('.bi-x');

menuBar.addEventListener('click',()=>{
    mobileMenu.style.display = "block";
    menuBar.style.display = "none";
});

closeMenu.addEventListener('click',()=>{
    menuBar.style.display = 'block';
    mobileMenu.style.display ='none';
});

moreButton.addEventListener('click',()=>{
    readMore.style.display = 'inline';
});