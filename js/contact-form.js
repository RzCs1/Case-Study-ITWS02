document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function (event) {
        // Clear previous messages
        formMessage.textContent = '';
        formMessage.style.color = 'red'; // Set the color for error messages

        // Get the values from the form
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name) {
            formMessage.textContent = 'Please enter your name.';
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!email) {
            formMessage.textContent = 'Please enter your email.';
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!message) {
            formMessage.textContent = 'Please enter your message.';
            event.preventDefault(); // Prevent form submission
            return;
        }

        // If validation passes, you can clear the message or perform further actions
        formMessage.textContent = 'Form submitted successfully!';
        formMessage.style.color = 'green'; // Set the color for success messages
    });
});