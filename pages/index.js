import { questprojects } from "../JS/data/project/index.js";
import { InjectionHandler } from "../JS/handlers/injection.handler.js";
import { QuestReadyEvent } from "../index.js";

// Helper function to format languages as pills
function formatLanguagesAsPills(languages) {
  return languages
    .map((lang) => `<span class="pill">${lang}</span>`) // Generate a pill for each language
    .join("");
}

function enableProjectReadMoreLinks() {
  // Skip read-more on mobile; let container expand naturally
  if (window.innerWidth <= 768) {
    return;
  }

  const cards = document.querySelectorAll(".project");
  cards.forEach((card) => {
    const textSpan = card.querySelector(".project-description-text");
    if (!textSpan) return;

    textSpan.classList.remove("clamped");
    card.querySelector(".read-more-link")?.remove();

    const lineHeight = parseFloat(getComputedStyle(textSpan).lineHeight) || 20;
    const maxHeight = lineHeight * 4;

    if (textSpan.scrollHeight > maxHeight + 1) {
      textSpan.classList.add("clamped");
      const readMore = document.createElement("a");
      readMore.href = "#";
      readMore.className = "read-more-link";
      readMore.textContent = "... click for more info";
      readMore.setAttribute(
        "aria-label",
        `Read more about ${card.querySelector("h3")?.textContent || "this project"}`
      );
      textSpan.parentElement.append(readMore);
    }
  });
}

function initializeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return null;

  const modalTitle = modal.querySelector("#project-modal-title");
  const modalImage = modal.querySelector("#project-modal-image");
  const modalDescription = modal.querySelector("#project-modal-description");
  const closeButton = modal.querySelector(".project-modal__close");
  let lastFocusedElement = null;

  function setModalContent(projectId, project) {
    modalTitle.textContent = project.title;
    modalImage.src = `../images/project/${projectId}.png`;
    modalImage.alt = project.title;
    modalDescription.innerHTML = project.description;
  }

  function openModal(projectId, project) {
    lastFocusedElement = document.activeElement;
    setModalContent(projectId, project);
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    modal.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocusedElement?.focus();
  }

  function onDocumentClick(event) {
    if (event.target === modal || event.target.closest(".project-modal__close")) {
      closeModal();
    }
  }

  function onKeyDown(event) {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements = Array.from(
      modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", onDocumentClick);
  modal.addEventListener("keydown", onKeyDown);

  return { openModal, closeModal };
}

const projectModalController = initializeProjectModal();

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.matches(".read-more-link")) return;

  event.preventDefault();
  event.stopPropagation();

  const card = target.closest(".project");
  const projectId = parseInt(card?.getAttribute("data-project-id"), 10);
  const project = questprojects.get(projectId);

  if (project && projectModalController) {
    projectModalController.openModal(projectId, project);
  }
});

// Main function to insert projects
async function InsertCC(projects) {
  const universityHolder = document.getElementById("university-projects-holder");
  const personalHolder = document.getElementById("personal-projects-holder");
  universityHolder.innerHTML = ""; // Clear container
  personalHolder.innerHTML = ""; // Clear container

  const injectionUni = new InjectionHandler().container(universityHolder);
  const injectionPer = new InjectionHandler().container(personalHolder);
  await injectionUni.template("../templates/projectcard.html");
  await injectionPer.template("../templates/projectcard.html");

  // Insert projects by category
  for (const [key, value] of projects) {
    const holder = value.category === "University Projects" ? universityHolder : personalHolder;
    const injection = value.category === "University Projects" ? injectionUni : injectionPer;

    injection
      .insertProps({
        projectId: key,
        name: value.title,
        languages: formatLanguagesAsPills(value.languages), // Insert formatted pills
        shortDescription: value.description,
        imageLink: `../images/project/${key}.png`,
      })
      .inject();
  }

  // Add click event listeners to each project card
  const projectCards = document.querySelectorAll(".project");
  projectCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.matches(".read-more-link") || event.target.closest(".read-more-link")) {
        return;
      }

      const projectId = parseInt(card.getAttribute("data-project-id"), 10);
      const project = projects.get(projectId);

      // Open the GitHub link in a new tab
      if (project && project.githubLink) {
        window.open(project.githubLink, "_blank");
      } else {
        console.error("GitHub link not found for project:", projectId);
      }
    });
  });

  enableProjectReadMoreLinks();
}

// Initialize project insertion on the custom event
document.addEventListener(QuestReadyEvent, () => {
  InsertCC(questprojects);
});

// Re-evaluate read-more on resize (for orientation changes, responsive design)
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    enableProjectReadMoreLinks();
  }, 250);
});
