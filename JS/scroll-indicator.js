document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const technologiesSection = document.querySelector('.technologies-section');
    
    scrollIndicator.addEventListener('click', () => {
        technologiesSection.scrollIntoView({ 
            behavior: 'smooth'
        });
    });

    // Hide scroll indicator when user scrolls past main section
    window.addEventListener('scroll', () => {
        const mainSection = document.querySelector('.main-section');
        const mainSectionBottom = mainSection.offsetTop + mainSection.offsetHeight;
        
        if (window.scrollY > mainSectionBottom - window.innerHeight) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
});