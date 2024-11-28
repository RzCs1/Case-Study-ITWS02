document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function (event) {
        formMessage.textContent = '';
        formMessage.style.color = 'red'; 


        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name) {
            formMessage.textContent = 'Please enter your name.';
            event.preventDefault();
            return;
        }

        if (!email) {
            formMessage.textContent = 'Please enter your email.';
            event.preventDefault(); 
            return;
        }

        if (!message) {
            formMessage.textContent = 'Please enter your message.';
            event.preventDefault(); 
            return;
        }

        formMessage.textContent = 'Form submitted successfully!';
        formMessage.style.color = 'green'; 

        event.preventDefault(); 
    });
});