import { initSwiper } from "./modules/swiper.js";
import { searchInput } from "./modules/search.js";
import { initCalendar } from "./modules/calendar.js";
import { initSelect } from "./modules/select.js";
import { initBurger } from "./modules/burger.js";

document.addEventListener('DOMContentLoaded', ()=>{
    initSwiper()
    searchInput()
    initCalendar()
    initBurger()
    
    document.addEventListener('click', (e)=>{
        initSelect(e)
    })
})