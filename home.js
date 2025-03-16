document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in & Slide-in Animation on Scroll
    const fadeInElements = document.querySelectorAll(".fade-in");
    const slideLeftElements = document.querySelectorAll(".slide-in-left");

    function handleScrollAnimation() {
        [...fadeInElements, ...slideLeftElements].forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Trigger on load

    // Dynamic Cursor Effect
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-effect");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Theme Switcher
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });

        // Apply saved theme
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    }

    // 3D Tilt Effect
    if (document.querySelector(".tilt-card")) {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 25,
            speed: 400
        });
    }

    // Particle.js Background
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80 },
                size: { value: 3 },
                move: { speed: 2 }
            }
        });
    }
});
