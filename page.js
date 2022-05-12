/* --------------------------- HAMBURGER --------------------------- */
let firstname;
let phone;
document.getElementById('callback').addEventListener('click', () => {
    return new Promise(resolve => {
            firstName = document.getElementById('name-offc').value
            phone = document.getElementById('phone-offc').value;
            let mess = `Success message: ${firstName} - ${phone}`
            resolve(mess)
        })
        .then(mess => console.log(mess))
})
/* ------------------------- Talk-an-expert ------------------------- */
let nome;
let email;
let number;
let message;
let job;
let choice;
let interest;
let checkbox;

document.getElementById('btn-modal').addEventListener('click', () => {
    return new Promise(resolve => {
            job = document.getElementById('inputGroupSelect01');
            if (job.value === 0) {
                job = 'Freelancer/Own Business'
            } else {
                job = 'Other Options'
            }
            choice = document.getElementById('inputGroupSelect02');
            if (choice.value === 0) {
                choice = 'Call me to Discuss my Questions'
            } else if (choice.value === 1) {
                choice = 'Email me your digital prospectus';
            } else {
                choice = 'Mail me your full information pack'
            }
            interest = document.getElementById('inputGroupSelect03');
            if (interest.value === 0) {
                interest = 'Financial Consultant'
            } else if (interest.value === 1) {
                interest = 'Accounting Services'
            } else if (interest.value === 2) {
                interest = 'Tax Services'
            } else if (interest.value === 3) {
                interest = 'Careers'
            } else {
                interest = 'Request Additional Information'
            }

            nome = document.getElementById('inputName').value;
            email = document.getElementById('inputEmail4').value;
            number = document.getElementById('inputPhone').value;
            message = document.getElementById('exampleFormControlTextarea1').value;
            checkbox = document.getElementById('gridCheck');
            if(checkbox.value === 1){
                checkbox = 'I agree to receive communications from FinLab'
            }
            else{
                checkbox = 'Not agree to receive communications from FinLab'
            }
            let mess = `
            ${nome}
            ${email} 
            ${number}
            ${message}
            ${job}
            ${choice} 
            ${interest}
            ${checkbox}`
            resolve(mess)
        })
        .then(mess => console.log(mess))
})


/* ----------------------------- COOKIES ----------------------------- */
let allCookies = document.querySelector('#all-cookies')
let fewCookies = document.querySelector('#few-cookies')
allCookies.addEventListener('click', () => {
    document.getElementsByClassName("cookies")[0].style.display = "none";
    console.log("L'utente accetta tutti i cookies")
})
fewCookies.addEventListener('click', () => {
    document.getElementsByClassName("cookies")[0].style.display = "none";
    console.log("L'utente accetta solo i cookies necessari")
})