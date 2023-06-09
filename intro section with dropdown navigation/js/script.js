const burgerBtn = document.querySelector('.burger-icon')
const mobileNav = document.querySelector('.mobile-navigation')
const featuresLink = document.querySelector('.features-link')
const featuresDiv = document.querySelector('.features')
const companyLink = document.querySelector('.company-link')
const companyDiv = document.querySelector('.company')

const featuresDesktopLink = document.querySelector('.features-link-desktop')
const featuresDesktopDiv = document.querySelector('.features-desktop')
const companyDesktopLink = document.querySelector('.company-link-desktop')
const companyDesktopDiv = document.querySelector('.company-desktop')

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

const showDesktopFeatures = () => {
	if ((featuresDesktopDiv.style.display = 'none')) {
		featuresDesktopDiv.style.display = 'flex'
	}
}

const showDesktopCompany = () => {
	if ((companyDesktopDiv.style.display = 'none')) {
		companyDesktopDiv.style.display = 'flex'
	}
}

burgerBtn.addEventListener('click', showNav)
featuresLink.addEventListener('click', showFeatures)
companyLink.addEventListener('click', showCompany)
featuresDesktopLink.addEventListener('click', showDesktopFeatures)
companyDesktopLink.addEventListener('click', showDesktopCompany)
