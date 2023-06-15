const burgerBtn = document.querySelector('.burger-icon')
const closeBtn = document.querySelector('.close')
const mobileNav = document.querySelector('.mobile-navigation')
const featuresLink = document.querySelector('.features-link')
const featuresDiv = document.querySelector('.features')
const featuresIcon = document.querySelector('.arrow-icon-features')
const companyIcon = document.querySelector('.arrow-icon-company')
const iconRotate = document.querySelector('.icon-rotate')
const companyLink = document.querySelector('.company-link')
const companyDiv = document.querySelector('.company')

const featuresDesktopLink = document.querySelector('.features-link-desktop')
const featuresDesktopDiv = document.querySelector('.features-desktop')
const featuresDesktopIcon = document.querySelector('.arrow-icon-features-desktop')
const companyDesktopLink = document.querySelector('.company-link-desktop')
const companyDesktopDiv = document.querySelector('.company-desktop')
const companyDesktopIcon = document.querySelector('.arrow-icon-company-desktop')

const showMobileNav = () => {
	mobileNav.classList.add('show')
	burgerBtn.style.display = 'none'
	closeBtn.style.display = 'block'
}

const closeMobileNav = () => {
	mobileNav.classList.remove('show')
	closeBtn.style.display = 'none'
	burgerBtn.style.display = 'block'
	featuresDiv.style.display = 'none'
	companyDiv.style.display = 'none'
	featuresIcon.classList.remove('icon-rotate')
	companyIcon.classList.remove('icon-rotate')
}

const showFeatures = () => {
	featuresDiv.style.display = 'flex'
	featuresIcon.classList.add('icon-rotate')
}



const showCompany = () => {
	companyDiv.style.display = 'flex'
	companyIcon.classList.add('icon-rotate')
}

const showFeaturesDesktop = () => {
	featuresDesktopDiv.style.display = 'flex'
	featuresDesktopIcon.classList.add('icon-rotate')
}

const showCompanyDesktop = () => {
	companyDesktopDiv.style.display = 'flex'
	companyDesktopIcon.classList.add('icon-rotate')
}

burgerBtn.addEventListener('click', showMobileNav)
closeBtn.addEventListener('click', closeMobileNav)
featuresLink.addEventListener('click', showFeatures)
companyLink.addEventListener('click', showCompany)
featuresDesktopLink.addEventListener('click', showFeaturesDesktop)
companyDesktopLink.addEventListener('click', showCompanyDesktop)
