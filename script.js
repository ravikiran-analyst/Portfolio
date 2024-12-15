function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.left = "0";  // Slide in from the left
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.left = "-250px";  // Slide out to the left
}

let lastScrollTop = 0;
let isScrolling;
const navbar = document.querySelector("nav");

// Hide navbar when scrolling down and show it when scrolling up
window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Detect scrolling down (hide navbar)
    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-10vh"; // Hide the navbar (move it off-screen)
    } else {
        // Detect scrolling up (show navbar)
        navbar.style.top = "0"; // Bring the navbar back into view
    }

    // Reset the scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    // Clear any existing timeout (to ensure only one timeout runs at a time)
    clearTimeout(isScrolling);

    // Set a timeout to show the navbar after scrolling stops
    isScrolling = setTimeout(function() {
        navbar.style.top = "0"; // Reappear the navbar once scrolling stops
    }, 150); // Delay of 150ms before reappearing the navbar
});



/// JavaScript for toggling the dropdown visibility
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active'); // Toggle the active class to show/hide dropdown
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('active'); // Close the dropdown when clicking cancel
}

// Optionally, close dropdown when a link is clicked
const links = document.querySelectorAll('.dropdown .links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.remove('active'); // Close the dropdown when a link is clicked
    });
});



// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000);  // Wait a second before erasing
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);  // Remove the last character
        setTimeout(eraseText, 50);  // Keep erasing at a fast pace
    }
    else {
        textIndex = (textIndex + 1) % texts.length;  // Loop through the texts
        charcterIndex = 0;
        setTimeout(typeWriter, 500);  // Wait before starting the next text
    }
}

 
// Call the setActiveNavLink function when the window loads to highlight the active page
window.onload = function() {
    typeWriter();  // Start typewriter effect
    setActiveNavLink();  // Highlight the active link based on the current page
};
