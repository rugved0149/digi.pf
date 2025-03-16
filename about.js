document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content-section");
    const navLinks = document.querySelectorAll("nav a");

    // Initially hide all sections
    sections.forEach(section => section.classList.add("hidden"));

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove("active");
            section.classList.add("hidden");
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove("hidden");
            setTimeout(() => targetSection.classList.add("active"), 10);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute('href');

            if (href === "index.html") {
                return; // Allow navigation to home
            }

            if (href.startsWith("#")) { // Only prevent default for internal links
                e.preventDefault();
                const sectionId = href.substring(1);
                showSection(sectionId);
            }
        });
    });

    showSection("intro"); // Default section

    // Cursor star effect
    document.body.addEventListener('mousemove', function (e) {
        const star = document.createElement('div');
        const size = Math.random() * 5 + 5;
        const color = `hsl(${Math.random() * 360}, 100%, 70%)`;

        star.style.position = 'absolute';
        star.style.left = `${e.pageX - size / 2}px`;
        star.style.top = `${e.pageY - size / 2}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = color;
        star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
        star.style.opacity = '0.8';
        star.style.pointerEvents = 'none';
        star.style.animation = 'fadeStar 1s forwards';

        document.body.appendChild(star);
        setTimeout(() => star.remove(), 1000);
    });
});
