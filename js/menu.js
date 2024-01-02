let menuInnerHtml;
let pageName;

window.addEventListener("load", function () {
  includeHTML();

  pageName = location.pathname;

  const start = window.performance.now();
  for (let i = 0, sum = 0; i < 10000; i++) {
    sum += i;
  }
  const end = window.performance.now();
  const time = end - start;

  setTimeout(() => {
    const box = document.querySelector(".menu");
    menuInnerHtml = box.innerHTML;
    boxObserver.observe(box);
  }, time * 500);

});

function circle(pageName) {
  if (pageName.indexOf("bookSummary.html") > -1 || pageName.indexOf("bookDetail.html")) {
    const className = document.querySelector(".thisPage.bookCircle");
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
