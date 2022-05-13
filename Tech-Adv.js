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


//disable submit buttons in modal-form and inpage-form
function disableButtons(){
    document.getElementById("modal-submit").disabled="true"
    document.getElementById("inpage-submit").disabled="true"
    document.getElementById("check").innerHTML="You'll Be Called Back Soon!"
    document.getElementById("check").style.fontSize="22px"
    document.getElementById("check").style.color="var(--green)"
    document.getElementById("check-inpage").innerHTML="You'll Be Called Back Soon!"
    document.getElementById("check-inpage").style.fontSize="22px"
    document.getElementById("check-inpage").style.color="var(--green)"
}


let modalForm={message:""},inPageForm={message:""}
//form modal
document.getElementById("modal-submit").addEventListener("click",()=>{
    return new Promise((resolve,reject)=>{
        modalForm.job= document.getElementById('job').value
        modalForm.info= document.getElementById('info').value
        modalForm.interest= document.getElementById('interest').value
        modalForm.fullname= document.getElementById('name').value
        modalForm.email= document.getElementById('email').value
        modalForm.phone= document.getElementById('phone').value
        modalForm.message= document.getElementById('message').value
        if(modalForm.fullname&&modalForm.email&&modalForm.phone)resolve(modalForm)
        else reject("All Inputs must be filled")
    })
    .then(infos=>{
        console.log(infos)
        disableButtons()
    })
    .catch(console.error) 
})
//form inpage
document.getElementById("inpage-submit").addEventListener("click",()=>{
    return new Promise((resolve,reject)=>{
        inPageForm.job= document.getElementById('job').value
        inPageForm.info= document.getElementById('info').value
        inPageForm.interest= document.getElementById('interest').value
        inPageForm.fullname= document.getElementById('name1').value
        inPageForm.email= document.getElementById('email1').value
        inPageForm.phone= document.getElementById('phone1').value
        inPageForm.message= document.getElementById('message').value
        if(inPageForm.fullname&&inPageForm.email&&inPageForm.phone)resolve(inPageForm)
        else reject("All Inputs must be filled")
    })
    .then(infos=>{
        console.log(infos)
        disableButtons()
    })
    .catch(console.error)
})
//form offcanvas
let nome,phone;
document.getElementById('callback').addEventListener('click',()=>{
    return new Promise((resolve,reject)=>{
        nome=document.getElementById('name-cb').value
        phone=document.getElementById('phone-cb').value;
        let str=`SUCCESS: ${nome}, ${phone}`
        if(nome&&phone)resolve(str)
        else reject("All Inputs must be filled")
    })
    .then(str=>{
        console.log(str)
        document.getElementById("callback-form").style.fontSize="22px"
        document.getElementById("callback-form").style.color="var(--green)"
        document.querySelector("#callback-form>p").innerHTML="You'll Be Called Back Soon!"
        document.getElementById("callback").disabled="true"

    })
    .catch(console.error)
})