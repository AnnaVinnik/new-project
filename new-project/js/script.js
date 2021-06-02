let theme = document.querySelector('.button-theme');
let page = document.querySelector('.page');
let indicator = document.querySelector('.button__indicator');

theme.onclick = function() {
    page.classList.toggle('green-theme');
    page.classList.toggle('white-theme');
    indicator.classList.toggle('button__indicator_left');
    theme.classList.toggle('button_green');
    indicator.classList.toggle('button__indicator_right');
}