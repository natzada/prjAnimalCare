// index.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // muda a img a cada 5s
}

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex -= 2;
    showSlides();
});

document.querySelector(".next").addEventListener("click", showSlides);

// Adding scroll reveal animations
window.addEventListener("scroll", () => {
    let aboutUs = document.querySelector(".about-us");
    let services = document.querySelector(".services");

    let aboutUsPosition = aboutUs.getBoundingClientRect().top;
    let servicesPosition = services.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (aboutUsPosition < screenPosition) {
        aboutUs.classList.add("show");
    }
    if (servicesPosition < screenPosition) {
        services.classList.add("show");
    }
});
