const burgerBtn = document.querySelector('.burger-icon')
const mobileNav = document.querySelector('.mobile-navigation')
const featuresLink = document.querySelector('.features-link')
const featuresDiv = document.querySelector('.features')
const companyLink = document.querySelector('.company-link')
const companyDiv = document.querySelector('.company')

const showNav = () => {
	mobileNav.classList.toggle('show')
}

const showFeatures = () => {
	if ((featuresDiv.style.display = 'none')) {
		featuresDiv.style.display = 'flex'
	}
}

const showCompany = () => {
	if ((companyDiv.style.display = 'none')) {
		companyDiv.style.display = 'flex'
	}
}

burgerBtn.addEventListener('click', showNav)
featuresLink.addEventListener('click', showFeatures)
companyLink.addEventListener('click', showCompany)
