let stats_div = document.getElementById("stats");
let counters = document.querySelectorAll(".counter");
const minmax_span = document.querySelector(".maxmin");
const dropdown_p = document.querySelector(".dropdown");
let showing = false;
const minmax2_span = document.querySelector(".maxmin2");
const dropdown2_p = document.querySelector(".dropdown2");
let showing2 = false;
const minmax3_span = document.querySelector(".maxmin3");
const dropdown3_p = document.querySelector(".dropdown3");
let showing3 = false;
const minmax4_span = document.querySelector(".maxmin4");
const dropdown4_p = document.querySelector(".dropdown4");
let showing4 = false;
const minmax5_span = document.querySelector(".maxmin5");
const dropdown5_p = document.querySelector(".dropdown5");
let showing5 = false;
console.log(window.innerHeight);
const repositionPage = () => {
  let showStat = localStorage.getItem("btnClicked");
  if (showStat === "SPL") {
    dropdown4_p.classList.add("show");
    minmax4_span.innerText = "-";
    showing4 = true;
    stats_div.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  }
  if (showStat === "MUN") {
    dropdown3_p.classList.add("show");
    minmax3_span.innerText = "-";
    showing3 = true;
    stats_div.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  }
  if (showStat === "RMA") {
    dropdown2_p.classList.add("show");
    minmax2_span.innerText = "-";
    showing2 = true;
    stats_div.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  }
  if (showStat === "JUV") {
    dropdown_p.classList.add("show");
    minmax_span.innerText = "-";
    showing = true;
    stats_div.scrollIntoView({ alignToTop: true, behavior: "smooth" });
  }
  localStorage.setItem("btnClicked", 0);
};

window.addEventListener("load", repositionPage);
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let image = document.querySelector(".logo");
  let height = window.innerHeight;
  let navbarHeight = navbar.clientHeight;
  let windowPosition = window.scrollY > 10;
  console.log(window.scrollY);
  if (windowPosition) {
    image.src = "images/SIU Logo 2.png";
  } else {
    image.src = "images/SIU Logo.png";
  }
  if (window.scrollY > height - navbarHeight) {
    navbar.classList.add("gold-line");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        let inc = 1;
        if (count + inc < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 10000 / target);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  } else {
    navbar.classList.remove("gold-line");
  }
  navbar.classList.toggle("scrolling-active", windowPosition);
});

minmax_span.addEventListener("click", function () {
  console.log("clikc");
  if (showing === false) {
    dropdown_p.classList.add("show");
    minmax_span.innerText = "-";
    showing = true;
  } else {
    dropdown_p.classList.remove("show");
    minmax_span.innerText = "+";
    showing = false;
  }
});
minmax2_span.addEventListener("click", function () {
  console.log("clikc");
  if (showing2 === false) {
    dropdown2_p.classList.add("show");
    minmax2_span.innerText = "-";
    showing2 = true;
  } else {
    dropdown2_p.classList.remove("show");
    minmax2_span.innerText = "+";
    showing2 = false;
  }
});
minmax3_span.addEventListener("click", function () {
  console.log("clikc");
  if (showing3 === false) {
    dropdown3_p.classList.add("show");
    minmax3_span.innerText = "-";
    showing3 = true;
  } else {
    dropdown3_p.classList.remove("show");
    minmax3_span.innerText = "+";
    showing3 = false;
  }
});
minmax4_span.addEventListener("click", function () {
  console.log("clikc");
  if (showing4 === false) {
    dropdown4_p.classList.add("show");
    minmax4_span.innerText = "-";
    showing4 = true;
  } else {
    dropdown4_p.classList.remove("show");
    minmax4_span.innerText = "+";
    showing4 = false;
  }
});
minmax5_span.addEventListener("click", function () {
  console.log("clikc");
  if (showing5 === false) {
    dropdown5_p.classList.add("show");
    minmax5_span.innerText = "-";
    showing5 = true;
  } else {
    dropdown5_p.classList.remove("show");
    minmax5_span.innerText = "+";
    showing5 = false;
  }
});
