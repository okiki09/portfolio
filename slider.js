/*=========================================
        TESTIMONIAL SLIDER
=========================================*/

const testimonials = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let autoSlide;

/*=========================================
        SHOW SLIDE
=========================================*/

function showSlide(index) {

    testimonials.forEach((card, i) => {

        if (i === index) {

            card.style.display = "block";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        } else {

            card.style.display = "none";

        }

    });

    dots.forEach((dot, i) => {

        dot.classList.toggle("active", i === index);

    });

    currentSlide = index;

}

/*=========================================
        NEXT SLIDE
=========================================*/

function nextSlide() {

    currentSlide++;

    if (currentSlide >= testimonials.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

/*=========================================
        AUTO PLAY
=========================================*/

function startSlider() {

    autoSlide = setInterval(nextSlide, 5000);

}

/*=========================================
        STOP AUTO PLAY
=========================================*/

function stopSlider() {

    clearInterval(autoSlide);

}

/*=========================================
        DOT NAVIGATION
=========================================*/

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        stopSlider();

        showSlide(index);

        startSlider();

    });

});

/*=========================================
        PAUSE ON HOVER
=========================================*/

const slider = document.querySelector(".testimonial-slider");

if (slider) {

    slider.addEventListener("mouseenter", stopSlider);

    slider.addEventListener("mouseleave", startSlider);

}

/*=========================================
        FADE EFFECT
=========================================*/

testimonials.forEach(card => {

    card.style.transition = "opacity .5s ease, transform .5s ease";

});

/*=========================================
        INITIALIZE
=========================================*/

if (testimonials.length > 0) {

    showSlide(0);

    startSlider();

}