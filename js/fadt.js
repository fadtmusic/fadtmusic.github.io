const navbarNav = document.querySelector(".navbar-desktop");
// ketika hamburger menu di klik
document.querySelector("#menu-button").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hm = document.querySelector("#menu-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

