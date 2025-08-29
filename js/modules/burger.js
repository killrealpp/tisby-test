export function initBurger() {
    const btn = document.querySelector('.burger .burger__btn')
    const menu = document.querySelector('.menu')
    const menuItems = document.querySelectorAll('.menu__item')
    const menuNumber = document.querySelector('.menu__link-number')

    if (!btn || !menu) return

    btn.addEventListener('click', () => {
        menu.classList.toggle('open-menu')
        btn.classList.toggle('active')
    })

    if (menuItems) {
        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                menu.classList.remove("open-menu");
                btn.classList.remove("active");
                menuNumber.style.display = 'block'
            })
        })
    }

    document.addEventListener('click', (e) => {
        const isClickInside = menu.contains(e.target) || btn.contains(e.target)
        if (!isClickInside && menu.classList.contains("open-menu")) {
            menu.classList.remove("open-menu");
            btn.classList.remove("active");
            menuNumber.style.display = 'none'
        }
    })
}