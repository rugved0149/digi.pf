// Simple animation for hover effect (optional, for better feel)
document.addEventListener("DOMContentLoaded", function () {
    const courseItems = document.querySelectorAll('.course-item');

    courseItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseleave', function () {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'none';
        });
    });
});
