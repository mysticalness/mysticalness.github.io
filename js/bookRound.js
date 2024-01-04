
window.onload = function() {
  const urlParams = new URL(location.href).searchParams;
  const name = urlParams.get('book');

  document.getElementById('thisBookName').textContent = `${name}`;
}