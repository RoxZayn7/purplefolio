// ========================================
// MOBILE MENU
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);

    const icon = menuToggle.querySelector("i");

    if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-times", isOpen);
    }
});
}


// ========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
    if (navLinks) return;
    navLinks.classList.remove("active");

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        const icon = menuToggle.querySelector("i");
        if (icon) { 
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        }
    }
});
});


// ========================================
// DARK / LIGHT THEME
// ========================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const lightMode = document.body.classList.contains("light-theme");

    if (themeIcon) {
            themeIcon.classList.toggle("fa-moon", !lightMode);
            themeIcon.classList.toggle("fa-sun", lightMode);
        } try {
            localStorage.setItem("theme", lightMode ? "light" : "dark");
        } catch (e) { /* storage might be disabled */ }
    });
};


// ========================================
// REMEMBER THEME
// ========================================

try {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
    if (themeIcon) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        }
    }
} catch (e) { /* storage might be disabled */ }


// ========================================
// BACKGROUND TOGGLE
// ========================================

const backgroundToggle = document.getElementById("backgroundToggle");
const backgroundEffect = document.getElementById("backgroundEffect");

if (backgroundToggle && backgroundEffect) {
    backgroundToggle.addEventListener("click", () => {
        backgroundEffect.classList.toggle("background-off");
        const isOff = backgroundEffect.classList.contains("background-off");

        try {
            localStorage.setItem("background", isOff ? "off" : "on");
        } catch (e) { /* storage might be disabled */ }
    });
}



// ========================================
// CONTACT POPUP
// ========================================

const contactFloat = document.getElementById("contactFloat");
const contactPopup = document.getElementById("contactPopup");
const popupClose = document.getElementById("popupClose");


if (contactFloat && contactPopup) {
    contactFloat.addEventListener("click", () => {
        contactPopup.classList.add("active");
    });
}


if (popupClose && contactPopup) {
    popupClose.addEventListener("click", () => {
        contactPopup.classList.remove("active");
    });
}


// ========================================
// CLOSE POPUP BY CLICKING OUTSIDE
// ========================================

if (contactPopup) {
    contactPopup.addEventListener("click", (event) => {
        if (event.target === contactPopup) {
            contactPopup.classList.remove("active");
        }
    });
}


// ========================================
// ESCAPE KEY CLOSES POPUP
// ========================================

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && contactPopup) {
        contactPopup.classList.remove("active");
    }
});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(".reveal");


function checkReveal() {
    revealElements.forEach((element) => {
        const position = element.getBoundingClientRect();
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

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });


    navigationLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});