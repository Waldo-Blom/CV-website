document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;

    // Perform the form submission via Formsubmit
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then(response => {
        if (response.ok) {
          // Show the popup message
          const popup = document.getElementById('popupMessage');
          popup.classList.remove('hidden');
          popup.classList.add('show');

          // Hide the popup after 3 seconds
          setTimeout(() => {
            popup.classList.remove('show');
            popup.classList.add('hidden');
          }, 3000);

          // Reset the form fields
          form.reset();
        } else {
          alert('An error occurred. Please try again.');
        }
      })
      .catch(error => {
        alert('Failed to send your message. Please check your internet connection and try again.');
        console.error(error);
      });
  });