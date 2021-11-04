'use strict';
let searchBar = document.querySelector('.searchbar');
let search = document.querySelector('.search');
let hamburgerMenu = document.querySelector('.hamburger');
let navUl = document.querySelector('.navbar-links-2');
let heartIcon = document.querySelector('.heart')
let heartModal = document.querySelector('.heart-modal');
let closeBtn = document.querySelector('.close');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('.form-container');
const error = document.getElementById('error');

searchBar.addEventListener('click', () => {
    search.classList.toggle('active');
});

hamburgerMenu.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

heartIcon.addEventListener('click', () => {
    heartModal.classList.toggle('active');
    heartModal.classList.remove('hidden');
    document.getElementById("overlay").style.display = "block";
});

closeBtn.addEventListener('click', () => {
    heartModal.classList.add('hidden');
    heartModal.classList.remove('active');
    document.getElementById("overlay").style.display = 'none';
});
document.getElementById("overlay").addEventListener('click', () => {
    document.getElementById("overlay").style.display = 'none';
    heartModal.classList.add('hidden');
    heartModal.classList.remove('active');
});
form.addEventListener('submit', (e) => {
    let messages = [];
    if(password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }
    if(password.value.length >= 20) {
        messages.push('Password must be shorter than 20 characters')
    }
    if (messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join(', ')
    }
});