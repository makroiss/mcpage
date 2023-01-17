function toggleNav() {
    document.body.classList.toggle('open');
}

function closeNav() {
    document.body.classList.remove('open');
}

function load() {
    let navtoggle = document.querySelector('#navtoggle');
    navtoggle.addEventListener('click', toggleNav);
}


window.onhashchange = load;
window.onload = load;
