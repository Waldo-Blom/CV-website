// Get all navigation links
const navLinks = document.querySelectorAll('.nav-menu li a');

// Add click event listeners
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove active class from all links
    navLinks.forEach(l => l.parentElement.classList.remove('active'));
    // Add active class to clicked link
    this.parentElement.classList.add('active');
  });
});

// Set active state based on current URL
function setActiveNav() {
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.parentElement.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-menu li a');
    
    // Remove any existing active classes
    const removeActiveClasses = () => {
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
        });
    };

    // Add click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default if you're using hash links
            removeActiveClasses();
            link.parentElement.classList.add('active');
        });
    });
});

// Call on page load
setActiveNav();