fetch("/json/bookSummary.json") //json파일 읽어오기
  .then((response) => response.json()) //읽어온 데이터를 json으로 변환
  .then((json) => {
    data = json.bookInfo_1; //json에 있는 items만 받아오기

    let html = "";
    data.forEach((element) => {
      html += `<div class="_items ${element.part}">
                  <a href="/pages/bookDetail.html?${element.bookName}">
                    <div class="bookName">${element.bookName}</div>
                  </a>
                  <div class="duration">${element.duration}</div>
              </div>
              <div class="_items ${element.part}">
                <span>${element.number}</span>
              </div>
              <div class="_items ${element.part}">
                <a class="bookImgLink" href="${element.bookImgLink}" target="_blank">
                <img class="bookImg" src="${element.bookImg}">
                </a>
              </div>`;
    });

    const appendHtml = document.querySelector(".bookList");
    appendHtml.innerHTML = html;
  });
