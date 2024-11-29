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

        formMessage.textContent = 'Message submitted successfully!';
        formMessage.style.color = 'green'; 

        const inputname = document.getElementById('name').value;
        const inputemail = document.getElementById('email').value;
        const inputmessage = document.getElementById('message').value;

        alert(`Name: ${inputname}\nEmail: ${inputemail}\nMessage: ${inputmessage}`);


        event.preventDefault(); 
    });
});


// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contact-form');

//     contactForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the form from submitting

//         // Get the values from the input fields
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         // Show an alert with the user's input
//         alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

//         // Optionally, you can submit the form here if needed
//         // contactForm.submit();
//     });
// });