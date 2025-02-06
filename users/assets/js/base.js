//-----------------------------------------------------------------------
// Version:        2.1
// Template name:  Finapp - Wallet & Banking HTML Mobile Template
// Item URL :      https://themeforest.net/item/finapp-wallet-banking-html-mobile-template/25738217
// Author:         Bragher
// Author URL :    https://themeforest.net/user/bragher
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Template Settings
//-----------------------------------------------------------------------
const Finapp = {
    //-------------------------------------------------------------------
    // PWA Settings
    PWA: {
        enable: true, // Enable or disable PWA
    },
    //-------------------------------------------------------------------
    // Dark Mode Settings
    Dark_Mode: {
        default: true, // Set dark mode as main theme
        local_mode: { // Activate dark mode between certain times of the day
            enable: false, // Enable or disable local dark mode
            start_time: 20, // Start at 20:00
            end_time: 7, // End at 07:00
        },
        auto_detect: { // Auto detect user's preferences and activate dark mode
            enable: false,
        }
    },
    //-------------------------------------------------------------------
    // Right to Left (RTL) Settings
    RTL: {
        enable: false, // Enable or disable RTL Mode
    },
    //-------------------------------------------------------------------
    // Animations
    Animation: {
        goBack: false, // Go back page animation
    },
    //-------------------------------------------------------------------
    // Test Mode
    Test: {
        enable: true, // Enable or disable test mode
        word: "testmode", // The word that needs to be typed to activate test mode
        alert: true, // Enable or disable alert when test mode is activated
        alertMessage: "Test mode activated. Look at the developer console!" // Alert message
    }
    //-------------------------------------------------------------------
}
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Elements
//-----------------------------------------------------------------------
var pageBody = document.querySelector("body");
var appSidebar = document.getElementById("sidebarPanel")
var loader = document.getElementById('loader');
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Service Workers
//-----------------------------------------------------------------------
// if (Finapp.PWA.enable) {
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('assets/__service-worker.js')
//             .then(reg => console.log('service worker registered'))
//             .catch(err => console.log('service worker not registered - there is an error.', err));
//     }
// }
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Page Loader with preload
//----------------------------------------------------------------------
setTimeout(() => {
    loader.setAttribute("style", "pointer-events: none; opacity: 0; transition: 0.2s ease-in-out;");
    setTimeout(() => {
        loader.setAttribute("style", "display: none;")
    }, 1000);
}, 450);
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Go Back Animation
function goBackAnimation() {
    pageBody.classList.add("animationGoBack")
    setTimeout(() => {
        window.history.go(-1);
    }, 300);
}
// Go Back Button
var goBackButton = document.querySelectorAll(".goBack");
goBackButton.forEach(function (el) {
    el.addEventListener("click", function () {
        if (Finapp.Animation.goBack) {
            goBackAnimation();
        }
        else {
            window.history.go(-1);
        }

    })
})
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// RTL (Right to Left)
if (Finapp.RTL.enable) {
    var pageHTML = document.querySelector("html")
    pageHTML.dir = "rtl"
    document.querySelector("body").classList.add("rtl-mode")
    if (appSidebar != null) {
        appSidebar.classList.remove("panelbox-left")
        appSidebar.classList.add("panelbox-right")
    }
    document.querySelectorAll(".carousel-full, .carousel-single, .carousel-multiple, .carousel-small, .carousel-slider").forEach(function (el) {
        el.setAttribute('data-splide', '{"direction":"rtl"}')
    })
}
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Fix for # href
//-----------------------------------------------------------------------
var aWithHref = document.querySelectorAll('a[href*="#"]');
aWithHref.forEach(function (el) {
    el.addEventListener("click", function (e) {
        e.preventDefault();
    })
});
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Input
// Clear input
