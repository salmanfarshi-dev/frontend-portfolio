export default function toast(message, type = "info") {
  const old = document.querySelector(".app-toast");
  if (old) old.remove();
  const el = document.createElement("div");
  el.className = `app-toast toast-${type}`;
  el.textContent = message;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add("toast-visible"));
  setTimeout(() => { el.classList.remove("toast-visible"); setTimeout(() => el.remove(), 250); }, 2800);
}