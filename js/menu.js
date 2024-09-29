let menuInnerHtml;
let pageName;

document.addEventListener("DOMContentLoaded", function () {
  includeHTML();

  let width = window.innerWidth;

  if (width < 501) {
    document.getElementById("menuId").style.display = "none";
    document.getElementById("menuId2").style.display = "block";
  }

  pageName = location.pathname;

});

window.addEventListener("resize", function () {
  let width = window.innerWidth;
  if (width < 510 && width > 300) {
    document.getElementById("menuId").style.display = "none";
    document.getElementById("menuId2").style.display = "block";
  } else if ((width > 510 && width < 700) || width > 1000) {
    document.getElementById("menuId").style.display = "block";
    document.getElementById("menuId2").style.display = "none";
  }
});

function showCircle(pageName) {
  let className = null;
  
  if (
    pageName.includes("bookSummary") ||
    pageName.includes("bookRound") ||
    pageName.includes("bookContent")
  ) {
    className = document.querySelector(".bookCircle");
  } else if (pageName.includes("technicalDocument")) {
    className = document.querySelector(".techCircle");
  } else if (pageName.includes("aboutMe")) {
    className = document.querySelector(".myCircle");
  }
  
}