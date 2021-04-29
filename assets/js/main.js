const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('show')
})

const navLink = document.querySelectorAll('.nav-link')

// Nav Link Action
function navAction() {
	navLink.forEach(n => n.classList.remove('active'))

	this.classList.add('active')
	navMenu.classList.remove('show')
}

navLink.forEach(n => {
	n.addEventListener('click', navAction)
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-title', {})
sr.reveal('.home-text', {delay: 200})
sr.reveal('.home-img', {delay: 400})
sr.reveal('.mulai-more', {})

sr.reveal('.section-title', {})
sr.reveal('.section-text', {delay: 200})
sr.reveal('.img-container', {})

sr.reveal('.card', {delay: 200})
sr.reveal('.dftr-rumah-btn', {})

sr.reveal('.product-card', {delay: 200})

sr.reveal('.subcription-box', {delay: 200})
