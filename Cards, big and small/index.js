// Hent lappen
var modal = document.getElementById('id01');

// Når bruker trykker noen steder utenfor blokken, lukk 
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}