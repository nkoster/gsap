gsap.from('.header', {
    duration: 1,
    y: '-100%',
    ease: 'bounce'
})
gsap.from('.link', {
    duration: 1.3,
    delay: .8,
    opacity: 0,
    stagger: .3
})
gsap.from('.right', {
    duration: 1,
    x: '-100vw',
    delay: 1.3,
    ease: 'power2.in'
})
gsap.from('.left', {
    duration: 1.3,
    delay: 1.4,
    x: '-100%'
})
gsap.to('.footer', {
    duration: 1,
    y: 0,
    ease: 'elastic',
    delay: 3
})
gsap.fromTo('.button', {
    opacity: 0,
    scale: 0,
    rotation: 720
}, {
    duration: 1,
    delay: 3.1,
    opacity: 1,
    scale: 1,
    rotation: 0
})

// const obj = { x: 0 }

// gsap.to(obj, {
//     duration: 2,
//     delay: 3,
//     x: 100,
//     onUpdate: _ => console.log(obj.x)
// })
