document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const popup = document.getElementById('popupMessage');
  const closeBtn = document.getElementById('closePopup');
  const spinner = document.getElementById('loadingSpinner');

  // Show the spinner
  spinner.classList.remove('hidden');

  // Handle popup close button
  closeBtn.addEventListener('click', function() {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  });

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  })
    .then(response => {
      if (response.ok) {
        // Show popup immediately
        popup.classList.remove('hidden');
        popup.classList.add('show');

         // Hide the popup after 3 seconds
         setTimeout(() => {
          popup.classList.remove('show');
          popup.classList.add('hidden');
        }, 8000);
        
        // Reset form
        form.reset();
      } else {
        alert('An error occurred. Please try again.');
      }
    })
    .catch(error => {
      alert('Failed to send your message. Please check your internet connection and try again.');
      console.error(error);
    })
    .finally(() => {
      // Hide the spinner regardless of the outcome
      spinner.classList.add('hidden');
    });
});