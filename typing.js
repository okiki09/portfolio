/*=========================================
            TYPING ANIMATION
=========================================*/

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Mobile developer",
    "PHP Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Enthusiast",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 120;
let deletingSpeed = 70;
let pauseTime = 1800;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, pauseTime);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? deletingSpeed : typingSpeed
    );

}

typeEffect();


/*=========================================
            BLINKING CURSOR
=========================================*/

const cursor = document.createElement("span");

cursor.innerHTML = "|";

cursor.style.marginLeft = "4px";

cursor.style.color = "#4DA8FF";

cursor.style.fontWeight = "700";

typingElement.insertAdjacentElement("afterend", cursor);

setInterval(() => {

    cursor.style.visibility =
        cursor.style.visibility === "hidden"
            ? "visible"
            : "hidden";

}, 500);