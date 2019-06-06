// Hent innlogg
var modal = document.getElementById('id01');

// Når bruker trykker noen steder utenfor blokken, lukk innloggingen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}