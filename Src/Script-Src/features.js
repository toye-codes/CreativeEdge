// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {

  const featureItems = document.querySelectorAll(".feature-item");

  featureItems.forEach((item) => {
    const titleButton = item.querySelector(".feature-title");
    titleButton.addEventListener("click", () => {
      item.classList.toggle("active");

      featureItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });
});
