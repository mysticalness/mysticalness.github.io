document.addEventListener("DOMContentLoaded", function () {
  const txtPath = `/text/자기소개서/story.txt`;
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = loadFile;
  xmlhttp.open("GET", txtPath);
  xmlhttp.send();

  loadFile();
});

function loadFile() {
  let result = null;
  if (this.status == 200) {
    result = this.responseText;
    document.getElementById("story1").textContent = result;
  }
}
