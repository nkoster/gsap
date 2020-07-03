const timeline = gsap.timeline({ defaults: {
    duration: 1.2
}})

timeline
.delay(1)
.from('.header', { y: '-100%', ease: 'bounce' })
.from('.link', { opacity: 0, stagger: .3 })
.from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
.from('.left', { x: '-100%' }, '<.5')
.to('.footer', { y: 0, ease: 'elastic' })
.fromTo('.button', 
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }, '<0.4')

const button = document.querySelector('.button')

button.addEventListener('click', _ => {
    const back = async _ => {
        await timeline.reverse()
        setTimeout(_ => timeline.restart(), 3000)
    }
    back()
})
