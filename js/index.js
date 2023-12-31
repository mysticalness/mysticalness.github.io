let menuInnerHtml;

document.addEventListener("DOMContentLoaded", () => {

  const clickPhoto = document.querySelector("#profilePhoto");
  clickPhoto.onclick = function () {
    clickHeartEvent();
  };
  
  const box = document.querySelector('.menu');
  menuInnerHtml = box.innerHTML;
  boxObserver.observe(box);

 });

function summeryPage() {
  location.href = '/pages/bookSummary.html';
}

 let boxObserver = new ResizeObserver((entries,observe) => {
  for(let entry of entries){
    const cr = entry.contentRect;
    const targetName = entry.target.className;
    if(targetName == 'menu')
      targetMenu(entry,cr.width);
  }
})

function targetMenu(entry, width) {
  if(width < 720)
    entry.target.innerHTML = `<div id="bookSummary" onclick="summeryPage()"><span>Summary</span></div>
                              <div id="techDocument"><span>Document</span></div>
                              <div id="aboutMe"><span>Info</span></div>`;
  else
    entry.target.innerHTML = menuInnerHtml;
}




