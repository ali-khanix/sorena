/*=============== CHANGE ICON ===============*/
function setNewIcon() {
  document.getElementById("icon1").src =
    "assets/images/icons/catalogue button/icon2.svg";
}

function setOldIcon() {
  document.getElementById("icon1").src =
    "assets/images/icons/catalogue button/icon1.svg";
}

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkAction));

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove("show-menu");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navMenu.classList.remove("show-menu");
  }
});
