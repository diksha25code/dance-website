const checkButton = document.getElementsByClassName('checkbtn')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

checkButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})