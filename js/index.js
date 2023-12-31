let menuInnerHtml;

document.addEventListener("DOMContentLoaded", () => {
  const bookSummeries = document.querySelector("#bookSummeries");
  bookSummeries.onclick = function() {
    location.href = '/pages/bookSummaries.html';
  }

  const box = document.querySelector('.menu');
  menuInnerHtml = box.innerHTML;
  boxObserver.observe(box);
  

 });

 let boxObserver = new ResizeObserver((entries,observe) => {
  for(let entry of entries){
    const cr = entry.contentRect;
    const targetName = entry.target.id;
    if(targetName == 'menu')
      targetMenu(entry,cr.width);
  }
})

function targetMenu(entry, width) {
  if(width < 720)
    entry.target.innerHTML = '<div>Summery</div><div>Document</div><div>Info</div>';
  else
    entry.target.innerHTML = menuInnerHtml;
}




