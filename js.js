const containerDiv=document.querySelector(".container");
const secContainerDiv=document.querySelector(".mainSecContainer");
const cancel=document.querySelector(".fa-solid");
const submit=document.querySelector(".submit");
const liTag=document.querySelectorAll("li");
const ratingText=document.querySelector(".ratingText")


for (let i = 0; i < liTag.length; i++) {
    liTag[i].id=i+1;
    liTag[i].addEventListener("click",(event)=>{
        ratingText.innerHTML+=`
        You selected ${event.target.id} out of 5`
    })
}
cancel.addEventListener("click",()=>{
    secContainerDiv.style.display="none";
    containerDiv.style.display="block";
    ratingText.innerHTML="";
})
submit.addEventListener("click",()=>{
    containerDiv.style.display="none"
    secContainerDiv.style.display="block"
})