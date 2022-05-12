//cookies
let allCookies=document.querySelector('#all-cookies')
let fewCookies=document.querySelector('#few-cookies')
allCookies.addEventListener('click',()=>{
    document.getElementsByClassName("cookie-info")[0].style.display="none";
    console.log("This user has choosen all cookies")
})
fewCookies.addEventListener('click',()=>{
    document.getElementsByClassName("cookie-info")[0].style.display="none";
    console.log("This user has choosen only necessary cookies")
})

//form
let offcanvasForm={message:""},inPageForm={message:""}
document.getElementById("offcanvas-form").addEventListener("click",()=>{
    return new Promise(resolve=>{
        offcanvasForm.job= document.getElementById('job').value
        offcanvasForm.info= document.getElementById('info').value
        offcanvasForm.interest= document.getElementById('interest').value
        offcanvasForm.fullname= document.getElementById('name').value
        offcanvasForm.email= document.getElementById('email').value
        offcanvasForm.phone= document.getElementById('phone').value
        offcanvasForm.message= document.getElementById('message').value
        resolve(offcanvasForm)
    })
    .then(infos=>console.log(infos))
})
document.getElementById("inpage-form").addEventListener("click",()=>{
    return new Promise(resolve=>{
        inPageForm.job= document.getElementById('job').value
        inPageForm.info= document.getElementById('info').value
        inPageForm.interest= document.getElementById('interest').value
        inPageForm.fullname= document.getElementById('name').value
        inPageForm.email= document.getElementById('email').value
        inPageForm.phone= document.getElementById('phone').value
        inPageForm.message= document.getElementById('message').value
        resolve(inPageForm)
    })
    .then(infos=>console.log(infos))
})
let nome,phone;
document.getElementById('callback').addEventListener('click',()=>{
    return new Promise(resolve=>{
        nome=document.getElementById('name-cb').value
        phone=document.getElementById('phone-cb').value;
        let str=`SUCCESS: ${nome}, ${phone}`
        resolve(str)
    })
    .then(str=>console.log(str))
})