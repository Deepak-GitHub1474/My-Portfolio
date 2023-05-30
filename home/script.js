// let socialMedia = document.querySelector(".fa-github");
// socialMedia.onclick = () =>{
//     // window.open("https://github.com/Deepak-GitHub1474");
//     window.location = "https://github.com/Deepak-GitHub1474";
// }

// let socialMedia = document.querySelectorAll(".fa-brands");

// socialMedia.forEach(links => {
//     links.addEventListener("click", () => {
//         // window.open(socialMedia.href);
//         window.location = socialMedia.href;
//     });
// });

// Hire Button

// Create a button element
// const button = document.createElement('button');

// // Set the button's text
// button.innerHTML = "Go to Gmail";

// // Add an event listener to the button
// button.addEventListener('click', () => {
//   // Redirect the user to Gmail
//   window.location = 'https://gmail.com';
// });

// // Append the button to the DOM
// document.body.appendChild(button);

// Hamberger

let hamberger = document.querySelector(".hamberger")
let headerTitle = document.querySelector(".header-title")
let hireMe = document.querySelector(".hire-me")
let navEl = document.querySelector(".nav-el")
let navSection = document.querySelector(".nav-section")
let mainLeftSection = document.querySelector(".main-left-section")
let mainRightSection = document.querySelector(".main-right-section")

hamberger.onclick = () =>{
    if(hamberger.classList.contains("fa-bars")){
        hamberger.classList.add("fa-circle-xmark")
        hamberger.classList.remove("fa-bars")
        navEl.style.display = "block"
        navEl.style.paddingleft = "10px"
        mainLeftSection.style.marginTop = "15rem"
        mainRightSection.style.marginBottom = "-15rem"
        navSection.style.height = "40vh"
        hamberger.style.position = "absolute"
        hamberger.style.top = "32px"
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
        mainLeftSection.style.marginTop = "0"
        mainRightSection.style.marginBottom = "0"
    }
    
}