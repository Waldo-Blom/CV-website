 // Handle form submission
 document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message });
    
    // Reset form
    this.reset();
    alert('Message sent successfully!');
});
