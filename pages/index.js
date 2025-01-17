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
  const projectsHolder = document.getElementById("projectsholder");
  projectsHolder.innerHTML = ""; // Clear container

  const injection = new InjectionHandler().container(projectsHolder);
  await injection.template("../templates/projectcard.html");

  // Insert all projects
  for (const [key, value] of projects) {
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
  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const projectId = [...projects.keys()][index]; // Get project ID
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
