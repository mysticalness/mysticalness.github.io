window.onload = function () {
  const urlParams = new URL(location.href).searchParams;
  const name = urlParams.get("book");

  document.getElementById("thisBookName").textContent = `${name}`;
};

function nextContent(name, number) {
  location.href = `/pages/bookContent.html?book=${name}&number=${number}`;
}

fetch("/json/bookRound.json") //json파일 읽어오기
  .then((response) => response.json()) //읽어온 데이터를 json으로 변환
  .then((json) => {
    data = json.bookRound; //json에 있는 items만 받아오기

    let fin = data.length;

    let html = "";
    data.forEach((element, i) => {
      let cnt = i + 1;
      if (cnt % 10 == 1) {
        html += `<div class="bookRound swiper-slide">
                 <div class="bookRoundL">`;
      }

      html += `<div class="roundBox" onclick="nextContent('${element.bookName}','${element.number}')">
              <div class="roundCount">`;
      if (element.number != "") html += `${element.number}일차 `;
      html += `<div class="countLine"></div></div>
              <div class="range">
                ${element.content}
              </div>`
      if(fin == cnt){
        html += `<div id="theEnd">- The End -</div>`
      }
      html += `</div>`;


      if (cnt % 10 == 0 || fin == cnt) {
        html += `   </div>
                    <div>
                      <div class="memoR">
                        <div class="memoT">memo</div>
                        <div></div>
                      </div>
                    </div>
                  </div>`;
      }
    });

    const appendHtml = document.querySelector(".swiper-wrapper");
    appendHtml.innerHTML = html;

    swp();
  });
