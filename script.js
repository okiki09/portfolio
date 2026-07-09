/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ==========================
// DARK MODE
// ==========================

const darkBtn = document.getElementById("darkMode");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        darkBtn.innerHTML = '<i class="fas fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        darkBtn.innerHTML = '<i class="fas fa-moon"></i>';

    }

});


// ==========================
// TYPING EFFECT
// ==========================

const words = [

    "Full-stack Developer",

    "Mobile Developer",

    "JavaScript Developer",

    "PHP Developer",

    "React-JS Developer",

    "UI/UX Enthusiast"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

typeEffect();


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(

    ".hero-text,.hero-image,.about-container,.skill,.project-card,#contact form"

);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";

            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "all .7s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ==========================
// CONTACT FORM
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// ==========================
// CURRENT YEAR
// ==========================

const footerText = document.querySelector("footer p");

footerText.innerHTML =
`© ${new Date().getFullYear()} Your Name. All Rights Reserved.`;


// ==========================
// HERO IMAGE HOVER EFFECT
// ==========================

const heroImage = document.querySelector(".hero-image img");

heroImage.addEventListener("mouseenter", () => {

    heroImage.style.transform = "scale(1.05)";

});

heroImage.addEventListener("mouseleave", () => {

    heroImage.style.transform = "scale(1)";

});


// ==========================
// PROJECT CARD HOVER
// ==========================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 20px 40px rgba(0,0,0,.18)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.08)";

    });

});