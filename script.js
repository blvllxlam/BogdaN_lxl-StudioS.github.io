// ===== PERSONAL DETAILS =====
// Replace these values before publishing.
const CONFIG = {
  email: "YOUR_EMAIL@example.com",
  telegram: "YOUR_TELEGRAM"
};

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("emailLink");
emailLink.href = `mailto:${CONFIG.email}`;

const telegramLink = document.querySelector(".social");
telegramLink.href = `https://t.me/${CONFIG.telegram}`;

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll("main section")];
const links = [...document.querySelectorAll(".nav a")];
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
});

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalText = document.getElementById("modalText");

document.querySelectorAll(".project-card").forEach(card => {
  card.querySelector(".arrow").addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalType.textContent = card.dataset.type;
    modalText.textContent = card.dataset.text;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
