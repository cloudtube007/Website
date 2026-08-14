function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
}
function sendForm(e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent =
    "Thank you. Your enquiry has been captured for this demo form.";
}

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval;


/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    

    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;
}


/* =========================
   NEXT SLIDE
========================= */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}


/* =========================
   AUTOMATIC SLIDESHOW
========================= */

function startSlider() {

    slideInterval = setInterval(nextSlide, 6000);

}


/* =========================
   START
========================= */

startSlider();