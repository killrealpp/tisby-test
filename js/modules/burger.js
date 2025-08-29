export function initBurger() {
    const btn = document.querySelector('.burger .burger__btn')
    const menu = document.querySelector('.menu')
    const menuItems = document.querySelectorAll('.menu__item')
    const menuNumber = document.querySelector('.menu__link-number')
    const overlay = document.querySelector('.overlay')

    if (!btn || !menu || !overlay) return

    function openMenu() {
        menu.classList.add('open-menu')
        btn.classList.add('active')
        overlay.classList.add('active')
        document.body.classList.add('lock')
    }

    function closeMenu() {
        menu.classList.remove('open-menu')
        btn.classList.remove('active')
        overlay.classList.remove('active')
        document.body.classList.remove('lock')
    }

    btn.addEventListener('click', () => {
        if (menu.classList.contains('open-menu')) {
            closeMenu()
        } else {
            openMenu()
        }
    })

    if (menuItems) {
        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                closeMenu()
                menuNumber.style.display = 'block'
            })
        })
    }

    document.addEventListener('click', (e) => {
        const isClickInside = menu.contains(e.target) || btn.contains(e.target)
        if (!isClickInside && menu.classList.contains("open-menu")) {
            closeMenu()
            menuNumber.style.display = 'none'
        }
    })

    overlay.addEventListener('click', closeMenu)
}
