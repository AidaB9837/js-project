
/* --------------------------- HAMBURGER --------------------------- */


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
