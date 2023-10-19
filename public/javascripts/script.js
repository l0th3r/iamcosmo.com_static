function popUp() {
    var popup = document.getElementById("popupid");
    popup.classList.toggle("show");
    setTimeout(function(){ popup.classList.add("hide"); }, 2500);
}
function copyStringToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}