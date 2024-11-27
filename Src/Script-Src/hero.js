// Hero section scroll Function
const heroSection = document.querySelector(".hero");

// Add an initial check to see if the hero section is already in view
if (isInView(heroSection)) {
  heroSection.classList.add("animate");
}

// This function checks if the hero section is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Adding Scroll Function
window.addEventListener("scroll", () => {
  if (isInView(heroSection)) {
    heroSection.classList.add("animate");
  } else {
    heroSection.classList.remove("animate");
  }
});
