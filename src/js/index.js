
// Мобильная навигация
 import mobileNav from './modules/mobile-nav.js';
 mobileNav();
//avtoComplete поиск стран
import autoComplete from "@tarekraafat/autocomplete.js";
//список стран и стили
import countryList from "./helpers/countryList";
//календарь
import { easepick } from '@easepick/bundle';
//popular-slider
import swiper from './modules/popular-slider.js';
swiper();
//scrollRevealFunc
import scrollRevealFunc from './modules/scrollReveal.js';
scrollRevealFunc();
//testimonials-swiper
 import swiperTestimonials from './modules/swiper-testimonials.js';
 swiperTestimonials()
//календарь
const picker = new easepick.create({
	element: document.getElementById('datePicket'),
	css: [
		'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
	],
	zIndex: 10,
	lang: "ru-RU",
	format: "HH:mm, DD/MM/YY",
	lang: "ru-RU",
	TimePlugin: {
		format12: false
	 }
	// plugins: [
	// 	TimePlugin
	// ]

});

//autoCompleteCountry
const autoCompleteJS = new autoComplete({
	selector: "#autoCompleteCountry",
	placeHolder: "e.g Bali, Indonesia",
	data: {
		src: countryList,
	},
	resultItem: {
		highlight: true,
	},
	events: {
		input: {
			selection: (event) => {
				const selection = event.detail.selection.value;
				autoCompleteJS.input.value = selection;

			},

		},
	},
	resultsList: {
		maxResults: 10,
	},
	searchEngine: 'strict',

});



