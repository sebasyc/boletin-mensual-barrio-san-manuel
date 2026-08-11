export function initParallax() {
  const elements = document.querySelectorAll('[data-parallax]')

  window.addEventListener('scroll', () => {
    elements.forEach(el => {
      const speed = el.dataset.parallax || 0.3
      el.style.transform = `translateY(${window.scrollY * speed}px)`
    })
  }, { passive: true })
}