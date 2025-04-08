function toggleTheme() {
  const theme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
}

function animateValue(id, start, end, duration) {
  let current = start;
  const step = (end - start) / (duration / 50);
  const obj = document.getElementById(id);
  const timer = setInterval(() => {
    current += step;
    obj.textContent = Math.floor(current);
    if (current >= end) clearInterval(timer);
  }, 50);
}

window.onload = () => {
  animateValue("projects", 0, 18, 1000);
  animateValue("years", 0, 8, 1000);

  document.getElementById("contact-form").onsubmit = function (e) {
    e.preventDefault();
    document.getElementById("form-msg").innerText = "Message sent successfully!";
  };
};