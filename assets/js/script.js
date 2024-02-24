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

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  spaceBetween: 30,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
