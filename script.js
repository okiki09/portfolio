/*=========================================
            PAGE LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

});


/*=============

  TOGGLER 

  ======================*/

  


/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,17,31,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

    }

});


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
            BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

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


/*=========================================
            COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 120;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/*=========================================
            DARK MODE
=========================================*/

/*=========================================
            DARK MODE
=========================================*/

const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

// Load saved theme
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        localStorage.setItem("theme","dark");

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*=========================================
        CURRENT YEAR
=========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*=========================================
        SIMPLE PARALLAX EFFECT
=========================================*/

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});