//console log data from the form inside modal
const modalBtn = document.getElementById('modalFormButton')
const form = document.getElementById('modal-form')

modalBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let obj = {}

     const selectOne = document.getElementById('selectOne')
    if (selectOne.value == 0) {
        obj[selectOne.name] = 'Freelencer/Own Business'
    } 
    else {
        obj[selectOne.name] = 'Other Options'
    }
    
    const selectTwo = document.getElementById('selectTwo')
    switch(selectTwo.value) {
        case '0': obj[selectTwo.name] = 'Call'
        break;
        case '1': obj[selectTwo.name] = 'Email'
        break;
        case '2': obj[selectTwo.name] = 'Letter'
        break
    }

    const selectThree = document.getElementById('selectThree')
    switch(selectThree.value) {
        case '0': obj[selectThree.name] = 'Financial Consultant'
        break;
        case '1': obj[selectThree.name] = 'Accounting Services'
        break;
        case '2': obj[selectThree.name] = 'Tax Services'
        break;
        case '3': obj[selectThree.name] = 'Careers'
        break;
        case '4': obj[selectThree.name] = 'Request Additional Information'
        break;
    }

    let elements = document.querySelectorAll("form[name='form1'] input");
    elements.forEach(function(element) {
       if(element[type='checkbox']) {
           obj[element.name] = element.checked
       }
       else {
          obj[element.name] = element.value
       }
    })


    const message = document.getElementById('messageInput')
    obj[message.name] = message.value

    console.log(JSON.stringify(obj))
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

//changing number

const numberOne = document.getElementById('card-title-number')
let counter1 = 0;
function countOne() {
    if (counter1 <= 435 ){
    numberOne.textContent = counter1++
    }
}
setInterval(countOne, 05)

const numberTwo = document.getElementById('card-title-number2')
let counter2 = 0;
function countTwo() {
    if (counter2 <= 100){
    numberTwo.textContent = counter2++
    }
}
setInterval(countTwo, 20)


//vibrating Icon
const chatIcon = document.getElementById('chat-icon')

function vibratingIcon() {
    chatIcon.style.transform = chatIcon.style.transform == 'rotate(-10deg)' ? 'rotate(10deg)' : 'rotate(-10deg)'
}


setInterval(sizeIcon, 2000)
function sizeIcon() {
    let large = '1.2rem';
    let small = '1rem';
    chatIcon.style.width = chatIcon.style.width == large ? small : large
    if (chatIcon.style.width == large) {
        setInterval(vibratingIcon, 250)
    } if (chatIcon.style.width == small) {
        chatIcon.style.transform == 'rotate(0deg)'
    }
}







