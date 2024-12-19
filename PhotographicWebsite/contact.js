document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation check
    if (name && email && message) {
        formMessage.textContent = "Thank you for contacting us, " + name + "! We will get back to you shortly.";
        formMessage.style.color = "green";

        // Here you can add your AJAX call to submit the form data to a server

        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});
