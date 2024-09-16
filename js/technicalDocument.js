fetch("/json/techDocument.json") //json파일 읽어오기
  .then((response) => response.json()) //읽어온 데이터를 json으로 변환
  .then((json) => {
    data = json.docuInfo_1; //json에 있는 items만 받아오기
    let html = "";

    data.forEach((element, i) => {
      let cnt = i + 1;

      if (cnt % 3 == 1) {
        html += `<div class="swiper-slide bookList documentList">`;
      }

      html += `<div class="_items ${element.part}">
                  <div class="documentName"  onclick="showPdf()">${element.documentName}</div>
                  <div class="duration">${element.duration}</div>
                </div>
                <div class="_items ${element.part}">
                  <span>${element.number}</span>
                </div>
                <div class="_items ${element.part}">
                  <img class="coverImg"`;
      if (element.coverImg != "") html += ` src="${element.coverImg}"`;
      html += `>
                </div>`;
      if (cnt % 3 == 0) {
        html += `</div>`;
      }
    });

    const appendHtml = document.querySelector(".swiper-wrapper");
    appendHtml.innerHTML = html;

    swp();
  });

function showPdf() {
  document.querySelector(".pdf-container").style.display = "block";

  const url = "pdf/kbsCardNews.pdf";

  // Asynchronously download PDF.
  pdfjsLib
    .getDocument(url)
    .promise.then((pdf) => {
      // Fetch the first page.
      pdf.getPage(1).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        // Prepare canvas using PDF page dimensions.
        const canvas = document.getElementById("my-pdf");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context.
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    })
    .catch((error) => {
      console.error("Error loading PDF:", error);
    });
}

function closePdf() {
  document.querySelector(".pdf-container").style.display = "none";
}
