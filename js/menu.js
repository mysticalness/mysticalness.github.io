let menuInnerHtml;
let pageName = location.pathname;

document.addEventListener("DOMContentLoaded", function () {
  includeHTML();
  let width = window.innerWidth;
  underFiveHundred(width) 
});



window.addEventListener("resize", function () {
  let width = window.innerWidth;
  underFiveHundred(width);
  if (width < 510 && width > 300) {
    document.getElementById("menuId").style.display = "none";
    document.getElementById("menuId2").style.display = "block";
  } else if ((width > 510 && width < 700) || width > 1000) {
    document.getElementById("menuId").style.display = "block";
    document.getElementById("menuId2").style.display = "none";
  }
});

function underFiveHundred(width) {
  if (width < 501) {
    document.getElementById("menuId").style.display = "none";
    document.getElementById("menuId2").style.display = "block";
  }
}

function showCircle() {


}
