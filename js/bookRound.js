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

    const bookName = document.getElementById("thisBookName").textContent;

    let html = "";
    data.forEach((element) => {
      html += `<div class="roundBox" onclick="nextContent('${bookName}','${element.number}')">
              <div class="roundCount">`;
      if (element.number != "") html += `${element.number}일차 `;
      html += `</div>
              <div class="range">
                ${element.content}
              </div>
          </div>`;
    });

    const appendHtml = document.querySelector(".bookRoundL");
    appendHtml.innerHTML = html;
  });
