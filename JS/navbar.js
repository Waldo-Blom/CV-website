document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-menu li a');
  
  // Remove any existing active classes
  const removeActiveClasses = () => {
      document.querySelectorAll('.nav-menu li').forEach(item => {
          item.classList.remove('active');
      });
  };

  // Add click event to each nav link
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          removeActiveClasses();
          link.parentElement.classList.add('active');
      });
  });
});