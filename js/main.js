


//  ---->>>> OnScroll    :---
let scrollBtn = document.querySelector(".scroll")
let headerSection = document.getElementById("header")
let landingPage = document.getElementById("under")
let stop = document.querySelector(".down")

window.onscroll = function () {
    if (  this.scrollY >= 100  ) {
        scrollBtn.classList.add("right")
        headerSection.classList.add("postionFixed")   
        landingPage.classList.add("undr")
        stop.classList.add("stop")
    }
    else {
        scrollBtn.classList.remove("right")
        headerSection.classList.remove("postionFixed")
        landingPage.classList.remove("undr")
        stop.classList.remove("stop")
    }
}

scrollBtn.onclick = function() {
    window.scrollTo({
        top : 0 ,
        behavior : "smooth" ,
    })
}









//  --->>>  Responnsive  Navbar :---
let open = document.querySelector(".open")
let close = document.querySelector(".close")
let navbar = document.querySelector(".navbar")

open.onclick = function() {
    navbar.classList.add("aber") ;
    close.classList.add("abar")
}

close.onclick = function () {
    navbar.classList.remove("aber")
    this.classList.remove("abar")
}




//  --->>>  Ressponsive Links  :---

let allLinks =  document.querySelectorAll(".navbar  a")


allLinks.forEach ( ( ele ) => {

    ele.onclick = function() {
        allLinks.forEach ( (e) => {
            e.classList.remove("active")
            this.classList.add("active")
        })
    }
})














