const tabsButton = document.querySelectorAll(".tab-button");
const tabsPanel = document.querySelectorAll(".tab-panel");

tabsButton.forEach((element) => {
  element.addEventListener("click", () => {
    tabsButton.forEach((tab) =>
      tab.classList.remove(
        "border-softRed",
        "border-b-4",
        "md:border-b-4",
        "md:border-softRed"
      )
    );

    const getTab = element.getAttribute("data-tab");

    element.classList.add(
      "border-b-4",
      "border-softRed",
      "md:border-b-4",
      "md:border-softRed"
    );
    tabsPanel.forEach((panel) => panel.classList.add("hidden"));
    const getPanel = document.querySelector(`[data-panel="${getTab}"]`);
    console.log(getTab, getPanel);
    getPanel.classList.remove("hidden");
    getPanel.classList.add("flex");
  });
});

function ToggleBtn() {
  const questions = document.querySelectorAll(".question");
  const answers = document.querySelectorAll(".answer");
  questions.forEach((element) => {
    element.addEventListener("click", () => {
      const arrow = element.parentElement.querySelector("img");
      const answer = element.parentElement.querySelector(".answer");

      document.querySelectorAll(".question img").forEach((img) => {
        if (img !== arrow) {
          img.classList.remove("rotate-180", "softred");
        }
      });

      answers.forEach((elementPanel) => {
        elementPanel.classList.remove("max-h-0", "max-h-[200px]", "block");

        if (answer !== elementPanel) {
          elementPanel.classList.add("hidden", "max-h-0");

          return;
        }
      });
      answer.classList.remove("max-h-0", "hidden");
      answer.classList.add("max-h-[200px]", "pb-3");
      arrow.classList.add("rotate-180");
      arrow.classList.toggle("softred");
    });
  });
}

ToggleBtn();
