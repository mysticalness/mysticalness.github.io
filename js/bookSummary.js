fetch("/json/bookSummary.json") //json파일 읽어오기
  .then((response) => response.json()) //읽어온 데이터를 json으로 변환
  .then((json) => {
    data = json.bookInfo_1; //json에 있는 items만 받아오기
    let html = "";

    data.forEach((element, i) => {
      let cnt = i + 1;

      if (cnt % 3 == 1) {
        html += `<div class="swiper-slide bookList">`;
      }

      html += `<div class="_items ${element.part}">
                    <a href="/pages/bookRound.html?book=${element.bookName}">
                      <div class="bookName">${element.bookName}</div>
                    </a>
                    <div class="duration">${element.duration}</div>
                </div>
                <div class="_items ${element.part}">
                  <span>${element.number}</span>
                </div>
                <div class="_items ${element.part}">
                  <a class="bookImgLink" href="${element.bookImgLink}" target="_blank">
                  <img class="bookImg"`;
      if (element.bookImg != "") html += ` src="${element.bookImg}"`;
      html += `>
                  </a>
                </div>`;

      if (cnt % 3 == 0) {
        html += `</div>`;
      }
    });

    const appendHtml = document.querySelector(".swiper-wrapper");
    appendHtml.innerHTML = html;

    swp();
  });
