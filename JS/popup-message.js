const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popupMessage');
const closeBtn = document.getElementById('closePopup');
const spinner = document.getElementById('loadingSpinner');
const formWrapper = document.querySelector('.contact-form-wrapper');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;

  formWrapper.classList.add('submit-success');
  spinner.classList.remove('hidden');

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  })
    .then(response => {
      if (response.ok) {
        popup.classList.remove('hidden');
        popup.classList.add('show');

        setTimeout(() => {
          popup.classList.remove('show');
          popup.classList.add('hidden');
        }, 8000);

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
      spinner.classList.add('hidden');
      setTimeout(() => {
        formWrapper.classList.remove('submit-success');
      }, 3000);
    });
});

closeBtn.addEventListener('click', function() {
  popup.classList.remove('show');
  popup.classList.add('hidden');
  formWrapper.classList.remove('submit-success');
});