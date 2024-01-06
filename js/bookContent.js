window.onload = function () {
  getUrlInfo().then((res) => {
    const txtPath = `/text/${res}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadFile;
    xmlhttp.open("GET", txtPath);
    xmlhttp.send();

    loadFile();
  });
};

function getUrlInfo() {
  return new Promise((resolve, reject) => {
    const urlParams = new URL(location.href).searchParams;
    const name = urlParams.get("book");
    const number = urlParams.get("number");
    if (name != "" && number != "") {
      document.getElementById("thisBookName").textContent = `${name}`;
      document.getElementById("number").textContent = `${number}.`;
      resolve(`${name}/${number}`);
    } else {
      reject("failed");
    }
  });
}

function loadFile() {
  let result = null;
  if (this.status == 200) {
    result = this.responseText;
    document.getElementById("writtenSummary").textContent = result;
  }
}
