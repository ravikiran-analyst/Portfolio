const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpBtn = document.getElementById("sign-up-btn");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("active");
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the input fields
    const inputs = document.querySelectorAll('.container input');

    // Add focus and blur events to the input fields to enhance UI/UX
    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.borderColor = '#512da8'; // Change border color when focused
            this.style.boxShadow = '0 0 5px rgba(81, 45, 168, 0.5)'; // Add shadow
        });

        input.addEventListener('blur', function () {
            this.style.borderColor = '#ccc'; // Reset border color when focus is lost
            this.style.boxShadow = 'none'; // Remove shadow
        });
    });
});

// When the user clicks on the Sign Up button
document.getElementById('sign-up-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.add('active'); // Show sign-up form
});

// When the user clicks on the Login button on the sign-up form
document.getElementById('login-btn').addEventListener('click', function() {
    document.querySelector('.container').classList.remove('active'); // Show login form
});



document.getElementById('to-signup').addEventListener('click', function () {
    document.querySelector('.container').classList.add('active');
});

document.getElementById('to-login').addEventListener('click', function () {
    document.querySelector('.container').classList.remove('active');
});

