//console log data from the form inside modal
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    

    const selectOne = document.getElementById('selectOne').selectedIndex
    console.log(selectOne)
    const selectTwo = document.getElementById('selectTwo').selectedIndex
    console.log(selectTwo)
    const selectThree = document.getElementById('selectThree').selectedIndex
    console.log(selectThree)

    const fullName = document.getElementById('fullNameInput').value
    console.log(fullName)
    const email = document.getElementById('emailInput').value
    console.log(email)
    const phoneNum = document.getElementById('phoneInput').value
    console.log(phoneNum)
    const message = document.getElementById('messageInput').value
    console.log(message)

    const checkbox = document.getElementById('checkbox').checked
    console.log(checkbox)
})

//hamburger menu
const hamburgerButton = document.getElementById('hamburger-button')
const hamburgerMenu = document.getElementById('hamburger-menu')

hamburgerButton.addEventListener('click', function() {
    hamburgerMenu.style.display = 'block'
})

//closing hamburger menu
const closeBtn = document.getElementById('close-burger-btn')

closeBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'none'
})

//console.log hamburger menu's form inputs
const burgerBtn = document.getElementById('burger-button')

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')
    const phone = document.getElementById('number')
    console.log('Form has been submitted! Customer name:' + name.value + '; Phone number: ' + phone.value)
})

//cookie section
// closing cookie section
const cookieSection = document.getElementById('cookie-policy')
const cookieClose = document.getElementById('cookie-btn-close')

cookieClose.addEventListener('click', () => {
    cookieSection.style.display = 'none'
})

//console.log cookie customer choice
const acceptCookie = document.getElementById('accept-cookie')

acceptCookie.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('All cookies accepted')
})

const selectCookie = document.getElementById('select-cookie')

selectCookie.addEventListener('click', (e) => {
    e.preventDefault()
    
    const analiticCookie = document.getElementById('cookie-analitici')
    const performanceCookie = document.getElementById('cookie-prestazione')
    const advertiseCookie = document.getElementById('cookie-pubblicità')

    console.log(analiticCookie.checked + performanceCookie.checked + advertiseCookie.checked)
})