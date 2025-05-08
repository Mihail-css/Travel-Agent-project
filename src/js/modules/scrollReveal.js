//scrollReveal
import ScrollReveal from 'scrollreveal';

//Базовая настройка
ScrollReveal({
    distance: '60px',
    duration: 2800,
    //reset:true,
});

function scrollRevealFunc() {

    ScrollReveal().reveal('.nav__list ,.logo,.nav__btns,.popular__controls' , {
        origin: 'top',
        // distance: '0px',
        //opacity: 0,
        //scale:2,

    });

    ScrollReveal().reveal(' .discover__picture-hint, .discover__title ' , {
        origin: 'left',
        scale: 2,

    });

    ScrollReveal().reveal('.discover__picture-scroll, .discover__text ',  {
        origin: 'right',
        //scale:2,

    });
    ScrollReveal().reveal('.discover__form, .discover__picture-img', {
        origin: 'button',
        //scale:2,

    });

}
export default scrollRevealFunc;