// Menu Show

const showMenu = (toggle, navId) => {
  const toggle = document.getElementById('toggleId')
  nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

// Active and Romove menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove('active'))
  this.classList.add('active')

  // Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

// Scroll Reveal Animation
const sr = ScrollReveal ({
  origin: 'top',
  distance: '80px'
  duration: 2000,
  reset: true
})
//SCROLL HOME
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

//SCROLL ABOUT

sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

//SCROLL BIO VIDEO
