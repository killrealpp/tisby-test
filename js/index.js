import { initSwiper } from "./modules/swiper.js";
import { searchInput } from "./modules/search.js";
import { initCalendar } from "./modules/calendar.js";
import { initSelect } from "./modules/select.js";

document.addEventListener('DOMContentLoaded', ()=>{
    initSwiper()
    searchInput()
    initCalendar()
    
    document.addEventListener('click', (e)=>{
        initSelect(e)
    })
})