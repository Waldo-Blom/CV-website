document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const techStackSection = document.querySelector('.bento-container');
    
    const sectionTop = techStackSection.offsetTop;

    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: sectionTop - 200, // Scroll 200px above the section
            behavior: 'smooth'
        });
        // Hide the indicator after scrolling
        setTimeout(() => {
            scrollIndicator.style.opacity = '0';
        }, 500); // Delay to allow smooth scroll to complete
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });

    // Show scroll indicator on page load
    scrollIndicator.style.opacity = '1';
});