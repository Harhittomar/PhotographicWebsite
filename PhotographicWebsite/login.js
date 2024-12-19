document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation check
    if (username === "user" && password === "password") {
        formMessage.textContent = "Login successful!";
        formMessage.style.color = "green";
        // Redirect to another page (e.g., dashboard.html)
        //
         window.location.replace("hmoe.html");
    } else {
        formMessage.textContent = "Invalid username or password!";
        formMessage.style.color = "red";
    }
});
