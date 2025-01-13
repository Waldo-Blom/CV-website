document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contactMeBtn");
    const contactSection = document.getElementById("contact");
  
    contactBtn.addEventListener("click", () => {
      contactSection.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
      });
    });
  });