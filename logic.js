let readMore = document.querySelector('.more');
let moreButton = document.querySelector('.moreButton');
const menuBar = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('#mobile-menu');

menuBar.addEventListener('click',()=>{
    mobileMenu.style.display = "block";
})
moreButton.addEventListener('click',()=>{
    readMore.style.display = 'inline';
})
console.log('we live')