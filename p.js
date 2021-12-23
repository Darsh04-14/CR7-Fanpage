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
