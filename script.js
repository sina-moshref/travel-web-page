let searchBtn = document.querySelector('#search-btn');
let navbar = document.querySelector('.navbar');
let loginBtn = document.querySelector('#login-btn');
let formClose = document.querySelector('#form-close');
let searchBar = document.querySelector('.search-bar-container');
let videoBtn = document.querySelectorAll('.vid-btn');
let menuBar = document.querySelector('#menu-bar');
let videoSlider = document.getElementById('video-slider');
let loginForm = document.querySelector('.login-form-container');

window.onscroll = () => {
    
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
}

searchBtn.addEventListener('click',() => {
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

loginBtn.addEventListener('click', () =>{
    loginForm.classList.add('active')
})

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active')
})

menuBar.addEventListener('click', () =>{
    navbar.classList.toggle('active')
    menuBar.classList.toggle('fa-times')
})

videoBtn.forEach( btn => {
    btn.addEventListener("click", (e) =>{
   videoSlider.src = e.target.dataset.src;
        videoBtn.forEach(btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
})
})