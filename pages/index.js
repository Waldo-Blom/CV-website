import { questprojects } from "../JS/data/project/index.js";
import { InjectionHandler } from "../JS/handlers/injection.handler.js";
import { QuestReadyEvent } from "../index.js";

// Helper function to format languages as pills
function formatLanguagesAsPills(languages) {
  return languages
    .map((lang) => `<span class="pill">${lang}</span>`) // Generate a pill for each language
    .join("");
}

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
    card.addEventListener("click", () => {
      const projectId = parseInt(card.getAttribute("data-project-id"));
      const project = projects.get(projectId);

      // Open the GitHub link in a new tab
      if (project && project.githubLink) {
        window.open(project.githubLink, "_blank");
      } else {
        console.error("GitHub link not found for project:", projectId);
      }
    });
  });
}

// Initialize project insertion on the custom event
document.addEventListener(QuestReadyEvent, () => {
  InsertCC(questprojects);
});
