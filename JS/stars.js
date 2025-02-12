// Purpose: Create particles for the background based on the theme

// Function to create a star for dark mode
export function createStar(bgTheme) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    bgTheme.appendChild(star);
}

export function createSun(bgTheme) {
    const sun = document.createElement('div');
    sun.classList.add('sun');
    bgTheme.appendChild(sun);
}

export function createParticles(bgTheme, darkMode) {
    bgTheme.innerHTML = ''; // Clear existing particles
    bgTheme.classList.remove('stars', 'sunrise'); // Remove old classes

    if (darkMode === 'enabled') {
        bgTheme.classList.add('stars');
        for (let i = 0; i < 200; i++) {
            createStar(bgTheme);
        }
    } else {
        bgTheme.classList.add('sunrise');
        createSun(bgTheme);
        // Recreate clouds
        const cloudOne = document.createElement('div');
        cloudOne.classList.add('cloud', 'one');
        const cloudTwo = document.createElement('div');
        cloudTwo.classList.add('cloud', 'two');
        bgTheme.appendChild(cloudOne);
        bgTheme.appendChild(cloudTwo);
    }
}
