let submitButton = document.getElementById('submit-button');
let fullnameInput = document.getElementById('fullname');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

// Regular characters for email format
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    event.preventDefault();


    let data = {};
    let errors = [];

    // Name
    if (fullnameInput.value.trim() !== '') {
        data.fullname = fullnameInput.value.trim();
    } else {
        errors.push('Full Name is required');
    }

    // Email
    if (emailInput.value.trim() !== '') {
        if (emailRegex.test(emailInput.value.trim())) {
            data.email = emailInput.value.trim();
        } else {
            errors.push('Invalid email format');
        }
    } else {
        errors.push('Email is required');
    }

    // Message
    if (messageInput.value.trim() !== '') {
        data.message = messageInput.value.trim();
    } else {
        errors.push('Message is required');
    }

    //  errors console log
    if (errors.length > 0) {
        console.log('Errors:', errors);
    } else {
        console.log('Form data:', data);
        // Clear form fields
        fullnameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

// Register form submit event
document.getElementById('contact-form').addEventListener('submit', validateForm);