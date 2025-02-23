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
