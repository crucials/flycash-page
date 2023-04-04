import AOS from 'aos'
import 'aos/dist/aos.css'

import './styles/main.scss'

AOS.init({
    duration: 700
})

window.addEventListener('load', () => {
    document.querySelector('.card-illustration-container')?.classList.add('card-illustration-container-visible')
})

export {}