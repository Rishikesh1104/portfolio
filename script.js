const roles = ["Aspiring Web Developer", "Creative Coder", "Team Leader"];
let index = 0;
let charIndex = 0;
const roleElement = document.getElementById("role");

function typeRole() {
  if (charIndex < roles[index].length) {
    roleElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 2000);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);



document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    toggleBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
  });
});
