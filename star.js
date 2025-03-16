// star-animation.js

document.body.addEventListener('mousemove', function (e) {
    const star = document.createElement('div');
    const size = Math.random() * 5 + 5; // Random size of the star (between 5px and 10px)
    const color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color using HSL for vivid colors

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = color;
    star.style.position = 'absolute';
    star.style.left = `${e.pageX - size / 2}px`;
    star.style.top = `${e.pageY - size / 2}px`; // Position the star at cursor
    star.style.borderRadius = '50%';
    star.style.pointerEvents = 'none';
    star.classList.add('star'); // Add the .star class to apply the animation

    // Append the star to the body
    document.body.appendChild(star);

    // Remove the star after the animation ends
    setTimeout(() => {
        star.remove();
    }, 1500); // Matches the duration of the animation
});
