function myFunction() {
  var elmnt = document.getElementById("1");
  var cln = elmnt.cloneNode(true);
  document.body.appendChild(cln);
}