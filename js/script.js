const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const overlay = document.querySelector('.header-overlay');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    trigerClassses(burger, menu);
})

body.addEventListener('click', e => {
    if(e.target.classList.contains('header-overlay')) trigerClassses(burger, menu);
})

function trigerClassses(btn, showBlock) {
    if (!btn.classList.contains('show')) {
        body.classList.add('stop-scroll');
        overlay.classList.add('show');
        btn.classList.add('show');
        showBlock.classList.add('show');

    } else {
        body.classList.remove('stop-scroll');
        overlay.classList.remove('show');
        btn.classList.remove('show');
        showBlock.classList.remove('show');
    }
}