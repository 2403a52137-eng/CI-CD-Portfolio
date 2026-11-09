function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("result");

    if (name === "" || message === "") {
        result.textContent = "Please fill all fields.";
    } else if (!validateEmail(email)) {
        result.textContent = "Please enter a valid email.";
    } else {
        result.textContent = "Thank you! Your message is submitted.";
        document.getElementById("contactForm").reset();
    }
});