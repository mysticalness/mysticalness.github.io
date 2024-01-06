let menuInnerHtml;
let pageName;
let time;

document.addEventListener("DOMContentLoaded", function () {
  includeHTML();

  pageName = location.pathname;

  const start = window.performance.now();
  for (let i = 0, sum = 0; i < 10000; i++) {
    sum += i;
  }
  const end = window.performance.now();
  time = end - start;
});

window.addEventListener("load", function () {
  setTimeout(() => {
    const box = document.querySelector(".menu");
    menuInnerHtml = box.innerHTML;
    boxObserver.observe(box);
  }, time * 500);
});

function circle(pageName) {
  if (
    pageName.indexOf("bookSummary.html") > -1 ||
    pageName.indexOf("bookRound.html") > -1 ||
    pageName.indexOf("bookContent.html") > -1
  ) {
    const className = document.querySelector(".thisPage.bookCircle");
    className.style.width = "150px";
    className.style.visibility = "visible";
  }
}

let boxObserver = new ResizeObserver((entries, observe) => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    const targetName = entry.target.className;
    if (targetName == "menu") targetMenu(entry, cr.width);
  }
  circle(pageName);
});

function targetMenu(entry, width) {
  if (width < 720)
    entry.target.innerHTML = `<div id="bookSummary"><div class="thisPage bookCircle"></div><a href="/pages/bookSummary.html">Summary</a></div>
                              <div id="techDocument">Document</div>
                              <div id="aboutMe">Info</div>`;
  else entry.target.innerHTML = menuInnerHtml;
}
