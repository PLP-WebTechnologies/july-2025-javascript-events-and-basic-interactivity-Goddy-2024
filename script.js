// ===== Part 1: Event Handling =====

// Click Counter
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
    count++;
    document.getElementById("counter").textContent = count;
});

// Change Image on Button Click
document.getElementById("changeImage").addEventListener("click", () => {
    const img = document.getElementById("galleryImage");
    img.src = `https://picsum.photos/150?random=${Math.floor(Math.random() * 100)}`;
});

// ===== Part 2: Custom Form Validation =====
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop default submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let feedback = document.getElementById("formFeedback");

    // Validation
    if (name === "" || email === "" || message === "") {
        feedback.textContent = "❌ Please fill in all fields.";
        feedback.style.color = "red";
        return;
    }
    if (!validateEmail(email)) {
        feedback.textContent = "❌ Please enter a valid email.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
    this.reset();
});

// Email format check function
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
