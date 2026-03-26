document.getElementById("hamburger").onclick = () => {
  const menu = document.getElementById("nav-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};