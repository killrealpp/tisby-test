export function searchInput() {
    const input = document.querySelector('.search__input')
    const btn = document.querySelector('.search__btn')
    const field = document.querySelector('.search__field')

    btn.addEventListener('click', () => {
        if (input.value.trim() === '') {
            field.classList.add('error')
        } else {
            field.classList.remove('error')
        }
    })

    document.addEventListener('click', (e) => {
        if (!field.contains(e.target) && !btn.contains(e.target)) {
            field.classList.remove('error')
        }
    })
}