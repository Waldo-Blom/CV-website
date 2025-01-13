export const QuestReadyEvent = "questReady";

function formatLayout() {
  const content = document.getElementById("content");
  Promise.all([]).then(() => document.dispatchEvent(new Event(QuestReadyEvent)));
}

formatLayout();