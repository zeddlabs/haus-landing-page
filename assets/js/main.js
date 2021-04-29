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