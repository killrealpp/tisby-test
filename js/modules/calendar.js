export function initCalendar() {
    const monthYearEl = document.getElementById('month-year')
    const daysContainer = document.getElementById('calendar-days')
    const dayNamesContainer = document.querySelector('.calendar__day-names')
    const prevBtn = document.getElementById('prev-btn')
    const nextBtn = document.getElementById('next-btn')

    const monthNames = [
        'Январь','Февраль','Март','Апрель','Май','Июнь',
        'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',
    ]

    const dayNames = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']

    let currentDate = new Date()

    const renderDayNames = () => {
        dayNamesContainer.innerHTML = dayNames.map(day => `<span>${day}</span>`).join('')
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()

        monthYearEl.textContent = `${monthNames[month]} ${year}`

        const firstDayOfMonth = new Date(year, month, 1)
        const lastDayOfMonth = new Date(year, month + 1, 0)
        const daysInMonth = lastDayOfMonth.getDate()

        const firstDate = (firstDayOfMonth.getDay() + 6) % 7
        const daysInPrevMonth = new Date(year, month, 0).getDate()

        daysContainer.innerHTML = ''

        for (let i = firstDate - 1; i >= 0; i--) {
            const dayNumber = daysInPrevMonth - i
            daysContainer.innerHTML += `<span class="calendar__days-hidden last">${dayNumber}</span>`
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const isToday =
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear()

            daysContainer.innerHTML += `<span class="${isToday ? 'today' : ''}">${day}</span>`
        }

        const totalDays = firstDate + daysInMonth
        const nextDays = (7 - (totalDays % 7)) % 7
        for (let i = 1; i <= nextDays; i++) {
            daysContainer.innerHTML += `<span class="calendar__days-hidden next">${i}</span>`
        }
    }

    const changeMonth = delta => {
        currentDate.setMonth(currentDate.getMonth() + delta)
        renderCalendar()
    }

    prevBtn.addEventListener('click', () => changeMonth(-1))
    nextBtn.addEventListener('click', () => changeMonth(1))

    renderDayNames()
    renderCalendar()
}
