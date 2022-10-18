const hamburger=document.querySelector(".hamburger");
const navmenu=document.querySelector(".nav-menu");
const nav =document.querySelector(".navbar");
const mainHead =document.querySelector(".main-header");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    nav.classList.toggle("active");
    mainHead.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    nav.classList.remove("active");
    mainHead.classList.remove("active");

}))