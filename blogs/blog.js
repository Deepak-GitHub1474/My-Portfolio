// Hamberger

let hamberger = document.querySelector(".hamberger")
let headerTitle = document.querySelector(".header-title")
let hireMe = document.querySelector(".hire-me")
let navEl = document.querySelector(".nav-el")
let navSection = document.querySelector(".nav-section")

hamberger.onclick = () =>{
    if(hamberger.classList.contains("fa-bars")){
        hamberger.classList.add("fa-circle-xmark")
        hamberger.classList.remove("fa-bars")
        hamberger.style.position = "absolute"
        hamberger.style.top = "32px"
        navEl.style.display = "block"
        navEl.style.paddingleft = "10px"
        navSection.style.height = "40vh"
        headerTitle.style.position = "absolute"
        headerTitle.style.top = "29.5px"
        hireMe.style.position = "absolute"
        hireMe.style.top = "32px"
    } 
    else{
        hamberger.classList.add("fa-bars")
        hamberger.classList.remove("fa-circle-xmark")
        navEl.style.display = "none"
        navSection.style.height = "14vh"
    }  
}