//console log data from the form inside modal
const modalBtn = document.getElementById('modalBtn')
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
const numberTwo = document.getElementById('card-title-number2')

let counter = 0;
let limit = 435;

function countOne() {
    if (counter <= limit ){
    numberOne.textContent = counter++}
}

setInterval(countOne, 20)

let limitTwo = 100
function countTwo() {
    if (counter <= limitTwo){
    numberTwo.textContent = counter++}
}

setInterval(countTwo, 60)

//hovering card onto image

// const cardHover = document.getElementById('card-hover')
// const imageHover = document.getElementById('image-hover')
 
// imageHover.addEventListener('mouseover', () => {
//     cardHover.style.display = 'block'
// })

// imageHover.addEventListener('mouseleave', () => {
//     cardHover.style.display = 'none'
// })