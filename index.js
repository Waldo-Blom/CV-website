export const QuestReadyEvent = "questReady";

function formatLayout() {
  const content = document.getElementById("content");
  Promise.all([
    fetch("/templates/header.html")
      .then((response) => response.text())
      .then((html) => content.insertAdjacentHTML("beforebegin", html)),
    fetch("/templates/footer.html")
      .then((response) => response.text())
      .then((html) => content.insertAdjacentHTML("afterend", html)),
  ]).then(() => document.dispatchEvent(new Event(QuestReadyEvent)));
}

formatLayout();

// observe changes in the document body to add event listeners to the dropdown and submenu
// since the elements are dynamically loaded and may not be available when the script is executed
const observer = new MutationObserver((mutations) => {
  const dropdown = document.getElementById("dropdown");
  const submenu = document.getElementById("submenu");
  if (dropdown && submenu) {
    observer.disconnect();
    console.log("observer disconnected");
    submenu.addEventListener("mouseenter", () => {
      dropdown.classList.add("shrink");
      dropdown.classList.remove("grow");
    });
    submenu.addEventListener("mouseleave", () => {
      dropdown.classList.remove("shrink");
      dropdown.classList.add("grow");
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

let resizeBody;
let animateInterval;
const faceOne = "(°ー°〃)";
const faceTwo = "(。_。)";
window.addEventListener("resize", (event) => {
  const body = document.querySelector("body");
  const screenWidth = document.documentElement.clientWidth;
  const minWidth = 768;
  if (screenWidth < minWidth) {
    if (resizeBody == undefined) resizeBody = body.innerHTML;
    body.innerHTML = "";
    const container = document.createElement("div");
    const textHeader = document.createElement("h1");
    const textAbove = document.createElement("span");
    const textBelow = document.createElement("span");

    container.style =
      "display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;";
    textAbove.innerText = "This site is not optimised for this screen size";
    textBelow.innerText = "Please resize your screen to a larger size.";
    textHeader.style = "font-weight: bold; user-select: none; position: absolute; top: 40%";
    textAbove.style = "font-weight: bold; margin-top: 2em;";
    textBelow.style = "font-weight: 500;";

    textHeader.innerText = faceOne;
    animateInterval = setInterval(() => {
      textHeader.innerText = textHeader.innerText === faceOne ? faceTwo : faceOne;
    }, 1000);

    container.appendChild(textHeader);
    container.appendChild(textAbove);
    container.appendChild(textBelow);
    body.appendChild(container);
  } else {
    if (resizeBody == undefined) return;
    clearInterval(animateInterval);
    body.innerHTML = resizeBody;
    body.style.backgroundColor = "";
    resizeBody = null;

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
});
