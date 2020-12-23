const preLoader = document.querySelector('#main-preloader');
const rootElement = document.querySelector('#root');

function closeLoader(){
    preLoader.classList.remove('active');
    rootElement.style.opacity = 1;
}

setTimeout(closeLoader, 2000);