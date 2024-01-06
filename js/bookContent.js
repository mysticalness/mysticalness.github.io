window.onload = function () {
  const urlParams = new URL(location.href).searchParams;
  const name = urlParams.get("book");
  const number = urlParams.get("number");
  document.getElementById("thisBookName").textContent = `${name}`;
  document.getElementById("number").textContent = `${number}.`;

  const txtPath = `/text/${name}/${number}`;
  const txt = loadFile(txtPath);
  document.getElementById("writtenSummary").textContent = txt;
};

function loadFile(filePath) {
  let result = null;
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}
