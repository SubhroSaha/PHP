const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
btnHamburger.addEventListener('click', function(){
    if(header.classList.contains("open")){
        header.classList.remove("open"); // Close hamburger menu
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
    }
    else {
        header.classList.add("open"); // Open hamburger menu
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
    }
    
});