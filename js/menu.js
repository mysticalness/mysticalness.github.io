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
  let className;
  if (
    pageName.indexOf("bookSummary.html") > -1 ||
    pageName.indexOf("bookRound.html") > -1 ||
    pageName.indexOf("bookContent.html") > -1
  ) {
    className = document.querySelector(".thisPage.bookCircle");
  } else if (pageName.indexOf("aboutMe.html") > -1) {
    className = document.querySelector(".thisPage.myCircle")
  }
  className.style.width = "150px";
  className.style.visibility = "visible";
}

let boxObserver = new ResizeObserver((entries, observe) => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    const targetName = entry.target.className;
    if (targetName == "menu") targetMenu(entry, cr.width);
  }
  if(pageName.indexOf("index.html") != 1)
    circle(pageName);
});

function targetMenu(entry, width) {
  if (width < 720)
    entry.target.innerHTML = `<div id="bookSummary"><div class="thisPage bookCircle"></div><a href="/pages/bookSummary.html">Summary</a></div>
                              <div id="techDocument">Document</div>
                              <div id="aboutMe"><div class="thisPage myCircle"></div><a href="/pages/aboutMe.html">Info</a></div>
                              <div onclick="showSettingMenu()">
                                <i id="setting" class="fa-solid fa-ellipsis-vertical"></i>
                              </div>`;
  else entry.target.innerHTML = menuInnerHtml;
}

function showSettingMenu(){
  let className = document.getElementById('showBox');
  if(className.style.visibility == "hidden" || className.style.visibility == "")
    className.style.visibility = "visible";
  else
    className.style.visibility = "hidden";
}
