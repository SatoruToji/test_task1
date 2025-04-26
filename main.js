import { scrollToSection } from './scripts/anchor_link.js'

document.querySelectorAll('.anchor_link').forEach((element) => {
    element.addEventListener('click', () => {
        scrollToSection('user_data')
    })
})

const header = document.getElementById('header')

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    header.style.background = `rgba(0, 0, 0, ${Math.min(scrollY / 100, 1)}`
})
