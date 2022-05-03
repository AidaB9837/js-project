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
   
    // const selectTwo = document.getElementById('selectTwo').value
    // switch(selectTwo) {
    //     case '0': console.log('Call')
    //     break;
    //     case '1': console.log('Email')
    //     break;
    //     case '2': console.log('Letter')
    //     break
    // }
    // const selectThree = document.getElementById('selectThree').value
    // switch(selectThree) {
    //     case '0': console.log('Financial Consultant')
    //     break;
    //     case '1': console.log('Accounting Services')
    //     break;
    //     case '2': console.log('Tax Services')
    //     break;
    //     case '3': console.log('Careers')
    //     break;
    //     case '4': console.log('Request Additional Information')
    //     break;
    // }

    // const fullName = document.getElementById('fullNameInput').value
    // const email = document.getElementById('emailInput').value
    // const phoneNum = document.getElementById('phoneInput').value
    // const message = document.getElementById('messageInput').value

    //  const checkbox = document.getElementById('checkbox').checked
    // console.log('Name: ' + fullName + '\nEmail: ' + email + '\nPhone Number: ' + phoneNum + '\nMessage: ' + message + '\nAgree to receive communications: ' + checkbox)
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

setInterval(countTwo, 50)

