import { initSwiper } from "./modules/swiper.js";
import { searchInput } from "./modules/search.js";
import { initCalendar } from "./modules/calendar.js";

document.addEventListener('DOMContentLoaded', ()=>{
    initSwiper()
    searchInput()
    initCalendar()
})