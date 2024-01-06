document.addEventListener("DOMContentLoaded", function () {
    
    const path = getUrlInfo();
    const txtPath = `/text/${path}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = loadFile;
    xmlhttp.open("GET", txtPath);
    xmlhttp.send();

    loadFile();
});

function getUrlInfo() {
    const urlParams = new URL(location.href).searchParams;
    const name = urlParams.get("book");
    const number = urlParams.get("number");
    document.getElementById("thisBookName").textContent = `${name}`;
    document.getElementById("number").textContent = `${number}.`;
    return `${name}/${number}`;  
}

function loadFile() {
  let result = null;
  if (this.status == 200) {
    result = this.responseText;
    document.getElementById("writtenSummary").textContent = result;
  }
}
