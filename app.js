let SPL_btn = document.getElementById("SPL");
let MUN_btn = document.getElementById("MUN");
let RMA_btn = document.getElementById("RMA");
let JUV_btn = document.getElementById("JUV");
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let navbarHeight = navbar.clientHeight;
  let image = document.querySelector(".logo");
  let windowPosition = window.scrollY > 10;
  let height = window.innerHeight;
  console.log(navbarHeight);
  if (windowPosition) {
    image.src = "images/SIU Logo 2.png";
  } else {
    image.src = "images/SIU Logo.png";
  }
  if (window.scrollY > height - navbarHeight) {
    navbar.classList.add("gold-line");
  } else {
    navbar.classList.remove("gold-line");
  }
  navbar.classList.toggle("scrolling-active", windowPosition);
});
SPL_btn.addEventListener("click", function () {
  localStorage.setItem("btnClicked", "SPL");
  location.replace("Career.html");
});
MUN_btn.addEventListener("click", function () {
  localStorage.setItem("btnClicked", "MUN");
  location.replace("Career.html");
});
RMA_btn.addEventListener("click", function () {
  localStorage.setItem("btnClicked", "RMA");
  location.replace("Career.html");
});
JUV_btn.addEventListener("click", function () {
  localStorage.setItem("btnClicked", "JUV");
  location.replace("Career.html");
});
