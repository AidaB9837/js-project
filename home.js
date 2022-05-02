//console log data from the form inside modal
const modalBtn = document.getElementById('modalBtn')
modalBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const selectOne = document.getElementById('selectOne').value
    if (selectOne == 0) {
        console.log('Freelencer/Own Business')
    } else {
        console.log('Other Options')
    }
    const selectTwo = document.getElementById('selectTwo').value
    switch(selectTwo) {
        case '0': console.log('Call')
        break;
        case '1': console.log('Email')
        break;
        case '2': console.log('Letter')
        break
    }
    const selectThree = document.getElementById('selectThree').value
    switch(selectThree) {
        case '0': console.log('Financial Consultant')
        break;
        case '1': console.log('Accounting Services')
        break;
        case '2': console.log('Tax Services')
        break;
        case '3': console.log('Careers')
        break;
        case '4': console.log('Request Additional Information')
        break;
    }

    const fullName = document.getElementById('fullNameInput').value
    const email = document.getElementById('emailInput').value
    const phoneNum = document.getElementById('phoneInput').value
    const message = document.getElementById('messageInput').value

    const checkbox = document.getElementById('checkbox').checked
    console.log('Name: ' + fullName + '\nEmail: ' + email + '\nPhone Number: ' + phoneNum + '\nMessage: ' + message + '\nAgree to receive communications: ' + checkbox)
})

//opening hamburger menu
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
    
    if (phone.value.length !== 10) {
        alert('This phone number is not valid\nPlease enter a 10 digits phone number')
    } else {console.log('Form submitted! Customer name:' + name.value + '; Phone number: ' + phone.value)}

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

    cookieSection.style.display = 'none'
})

const selectCookie = document.getElementById('select-cookie')

selectCookie.addEventListener('click', (e) => {
    e.preventDefault()
    
    const analiticCookie = document.getElementById('cookie-analitici')
    const performanceCookie = document.getElementById('cookie-prestazione')
    const advertiseCookie = document.getElementById('cookie-pubblicità')

    if (analiticCookie.checked) {
        console.log('Analitic Cookies accepted')
    }
    if (performanceCookie.checked) {
        console.log('Performance Cookies accepted')
    }
    if (advertiseCookie.checked) {
        console.log('Advertisement Cookies accepted')
    }

    cookieSection.style.display = 'none'
})