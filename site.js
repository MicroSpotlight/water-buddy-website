const root = document.documentElement;
const trigger = document.querySelector("[data-theme-trigger]");
const menu = document.querySelector("[data-theme-menu]");
const options = [...document.querySelectorAll("[data-theme-option]")];
const themes = new Set(["pond", "matcha", "lagoon"]);

function applyTheme(theme) {
  const value = themes.has(theme) ? theme : "pond";
  root.dataset.theme = value;
  options.forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.themeOption === value));
  });
  try {
    localStorage.setItem("water-buddy-site-theme", value);
  } catch (_) {}
}

if (trigger && menu) {
  trigger.addEventListener("click", () => {
    const willOpen = menu.hidden;
    menu.hidden = !willOpen;
    trigger.setAttribute("aria-expanded", String(willOpen));
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      applyTheme(option.dataset.themeOption);
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".theme-picker")) {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    }
  });
}

let savedTheme = "pond";
try {
  savedTheme = localStorage.getItem("water-buddy-site-theme") || "pond";
} catch (_) {}
applyTheme(savedTheme);

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
