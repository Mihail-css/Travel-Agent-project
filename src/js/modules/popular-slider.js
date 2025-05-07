//слайдер
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
    const swiper = new Swiper('#popular-slider', {
        slidesPerView: 1,
        spaceBetween: 32,
        //direction: 'vertical', //по умолчанию горизонт
        loop: true,//зацикливание
        navigation: {
            nextEl: '#popularNext',
            prevEl: '#popularPrev',
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
           
        },

    });
}
    export default swiperFunc;