//календарь
import { easepick, TimePlugin } from '@easepick/bundle';

function easepickFunc() {
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
        },
       plugins: [
            TimePlugin
        ]

    });


}
export default easepickFunc;