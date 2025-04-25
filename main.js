import { scrollToSection } from './scripts/anchor_link.js'

document.querySelectorAll('.anchor_link').forEach((element) => {
    element.addEventListener('click', () => {
        scrollToSection('user_data')
    })
})
