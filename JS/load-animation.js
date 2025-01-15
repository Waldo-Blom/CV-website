document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const gridContainer = document.querySelector('.grid-container');
    const mainSection = document.querySelector('.main-section');
    
    // Hide scrollbar during loading
    document.body.style.overflow = 'hidden';
    
    // Add initial classes
    gridContainer.classList.add('content-hidden');
    
    // Simulate loading time and animate
    setTimeout(() => {
      // Hide loader
      loaderWrapper.style.opacity = '0';
      loaderWrapper.style.visibility = 'hidden';
      
      // Show content with animation
      gridContainer.classList.remove('content-hidden');
      gridContainer.classList.add('fade-in');
      
      // Restore scrolling
      document.body.style.overflow = '';
      
      // Trigger any animations on main content
      const elements = mainSection.children;
      Array.from(elements).forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.transition = 'all 0.5s ease-out';
        }, index * 200); // Stagger the animations
      });
    }, 2000); // Loader shows for 2 seconds
  });