// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const btn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

btn?.addEventListener("click", () => {
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
  mobileNav.hidden = expanded;
});

// Close mobile nav when clicking a link
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    btn.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  });
});
