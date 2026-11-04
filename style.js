// ========================================
// MOBILE MENU
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


// ========================================
// DARK / LIGHT THEME
// ========================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    // FIXED: document.body instead of document
    document.body.classList.toggle("light-theme");

    const lightMode =
        document.body.classList.contains("light-theme");

    if (lightMode) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});


// ========================================
// REMEMBER THEME
// ========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}


// ========================================
// BACKGROUND TOGGLE
// ========================================

const backgroundToggle =
    document.getElementById("backgroundToggle");

const backgroundEffect =
    document.getElementById("backgroundEffect");

backgroundToggle.addEventListener("click", () => {

    backgroundEffect.classList.toggle("background-off");

    const isOff =
        backgroundEffect.classList.contains("background-off");

    localStorage.setItem(
        "background",
        isOff ? "off" : "on"
    );

});


// ========================================
// REMEMBER BACKGROUND SETTING
// ========================================

const savedBackground =
    localStorage.getItem("background");

if (savedBackground === "off") {

    backgroundEffect.classList.add("background-off");

}


// ========================================
// CONTACT POPUP
// ========================================

const contactFloat =
    document.getElementById("contactFloat");

const contactPopup =
    document.getElementById("contactPopup");

const popupClose =
    document.getElementById("popupClose");


contactFloat.addEventListener("click", () => {

    contactPopup.classList.add("active");

});


popupClose.addEventListener("click", () => {

    contactPopup.classList.remove("active");

});


// ========================================
// CLOSE POPUP BY CLICKING OUTSIDE
// ========================================

contactPopup.addEventListener("click", (event) => {

    if (event.target === contactPopup) {

        contactPopup.classList.remove("active");

    }

});


// ========================================
// ESCAPE KEY CLOSES POPUP
// ========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        contactPopup.classList.remove("active");

    }

});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");


function checkReveal() {

    revealElements.forEach((element) => {

        const position =
            element.getBoundingClientRect();

        if (position.top < window.innerHeight - 80) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", checkReveal);

window.addEventListener("load", checkReveal);

checkReveal();


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});