export function initSelect(e) {

    if (!e.target.closest('.select')){
        const selectsOpen = document.querySelectorAll('.select.open-select')
        selectsOpen.forEach((item)=>{
            item.classList.remove('open-select')
        })

        return
    } 

    const select = e.target.closest('.select')

    const btn = select.querySelector('.select__btn')

    const text = btn.querySelector('.select__btn-text')

    if (e.target.closest('.select__btn')){
        select.classList.toggle('open-select')
    }

    if(e.target.closest('.select__item')){
        text.textContent = e.target.closest('.select__item').textContent
        select.classList.remove('open-select')
    }
}

