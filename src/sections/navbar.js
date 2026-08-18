export function initNavbar() {
    const header = document.querySelector('.top-header')
    const hamburger = document.querySelector('#hamburger')

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 400)
    }, { passive: true })

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open')
        header.classList.toggle('open')
    })

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            hamburger.classList.remove('open')
            header.classList.remove('open')
            const target = document.querySelector(link.getAttribute('href'))
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })
}