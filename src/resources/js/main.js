$(document).ready(function () {
    $('.menu-toggler').on('click' , function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');

    });
    $('.top-nav .nav-link').on('click' , function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click' , function () {
        $('html, body').animate(KeyframeEffect = {
            scrollTop: $($(this).attr('href')).offset().top -100
        }, Option = 2000);

    });
    $('#up').on('click' , function () {
        $('html, body').animate(KeyframeEffect = {
            scrollTop: 0
        }, Option = 2000);
    });
    AOS.init ({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

// color theme change 
const body = document.querySelector('#body');
const nav  = document.querySelector('.top-nav');
const cont = document.querySelector('#contact');


const greenThemeButton = document.querySelector('#green-theme')


function changeColor(bodyColor, navColor, contentColor, buttonBg){
    body.classList.toggle(bodyColor);
    nav.classList.toggle(navColor);
    cont.classList.toggle(contentColor);
    greenThemeButton.classList.toggle(buttonBg);
    
}
greenThemeButton.addEventListener('click',()=> {
    changeColor('grad-green-color','grad-green-color-nav','grad-green-color-contact','dark-theme-color');
    
} );

















