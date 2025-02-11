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

// Function to create sun rays spreading from the top-right
// export function createSunRay(bgTheme) {
// }

// Function to create particles based on the theme
export function createParticles(bgTheme, darkMode) {
    bgTheme.innerHTML = ''; // Clear existing particles
    bgTheme.classList.remove('stars', 'sun-rays');

    if (darkMode === 'enabled') {
        bgTheme.classList.add('stars');
        for (let i = 0; i < 200; i++) {
            createStar(bgTheme);
        }
    } else {
        // bgTheme.classList.add('sun-rays');
        // for (let i = 0; i < 200; i++) { 
        //     createSunRay(bgTheme);
        // }
    }
}


