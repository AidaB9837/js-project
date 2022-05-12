
/* --------------------------- HAMBURGER --------------------------- */
let name;
let phone;
document.getElementById('callback').addEventListener('click',()=>{
    return new Promise(resolve=>{
        name=document.getElementById('name-offc').value
        phone=document.getElementById('phone-offc').value;
        let message=Success message:${name}-${phone}
        resolve(message)
    })
    .then(message=>console.log(message))
})
/* ------------------------- Talk-an-expert ------------------------- */


/* ----------------------------- COOKIES ----------------------------- */
let allCookies=document.querySelector('#all-cookies')
let fewCookies=document.querySelector('#few-cookies')
allCookies.addEventListener('click',()=>{
    document.getElementsByClassName("cookies")[0].style.display="none";
    console.log("L'utente accetta tutti i cookies")
})
fewCookies.addEventListener('click',()=>{
    document.getElementsByClassName("cookies")[0].style.display="none";
    console.log("L'utente accetta solo i cookies necessari")
})
