document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully! (This is a demo, backend needed for real submission)");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Fade-in animations
    const contactSection = document.getElementById("contact-info");
    const formSection = document.getElementById("contact-form");

    contactSection.style.opacity = 0;
    formSection.style.opacity = 0;

    setTimeout(() => {
        contactSection.style.transition = "opacity 1.5s ease-in-out";
        contactSection.style.opacity = 1;
    }, 200);

    setTimeout(() => {
        formSection.style.transition = "opacity 1.5s ease-in-out";
        formSection.style.opacity = 1;
    }, 500);

    // Bubble Animation
    const bubbleContainer = document.createElement("div");
    bubbleContainer.classList.add("bubble-container");
    document.body.appendChild(bubbleContainer);

    function createBubble() {
        const bubble = document.createElement("span");
        bubble.classList.add("bubble");

        let size = Math.random() * 30 + 10; // Random size between 10px and 40px
        let position = Math.random() * 100; // Random horizontal position
        let duration = Math.random() * 10 + 5; // Float speed (5s - 15s)

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${position}%`;
        bubble.style.animation = `rise ${duration}s linear infinite`;

        bubbleContainer.appendChild(bubble);

        // Remove bubbles after animation ends
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }

    // Generate bubbles every second
    setInterval(createBubble, 500);
});
