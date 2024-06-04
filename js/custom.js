const checkBox = document.querySelector('div[name="theme"]');
const icon = document.querySelector("#switch_icon");
let htmlElement = document.documentElement;
let img = document.querySelector(".navbar-brand img");
let ftrImg = document.querySelector(".footer_icon_img img");

checkBox.addEventListener("click", function () {
  if (!icon.classList.contains("switched")) {
    img.setAttribute("src", "images/darklogo.png"); 
    ftrImg.setAttribute("src", "images/darklogo.png"); 
    icon.classList.add("switched");
    checkBox.classList.add("switched");
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    img.setAttribute("src", "images/logo.png");
    ftrImg.setAttribute("src", "images/footerLogo.png");
    icon.classList.remove("switched");
    checkBox.classList.remove("switched");
    htmlElement.classList.toggle("transition");
    htmlElement.setAttribute("data-theme", "light");
  }
});
