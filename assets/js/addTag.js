document.addEventListener('DOMContentLoaded', function () {
    // Función para colocar las tags de las tarjetas en el Panel Derecho
    document.getElementById('check1').addEventListener("change", obtenerTagsTarjeta, false);
    document.getElementById('check2').addEventListener("change", obtenerTagsTarjeta, false);
    document.getElementById('check3').addEventListener("change", obtenerTagsTarjeta, false);
    document.getElementById('check4').addEventListener("change", obtenerTagsTarjeta, false);
    document.getElementById('check5').addEventListener("change", obtenerTagsTarjeta, false);
    document.getElementById('check6').addEventListener("change", obtenerTagsTarjeta, false);
    document.getElementById('check7').addEventListener("change", obtenerTagsTarjeta, false);
    document.getElementById('check8').addEventListener("change", obtenerTagsTarjeta, false);

    function obtenerTagsTarjeta(){
        const id = this.getAttribute("id");
        if(id === "check1"){ selector = "tagContainer1"; idTag = "tagspan1"; }
        if(id === "check2"){ selector = "tagContainer2"; idTag = "tagspan2"; }
        if(id === "check3"){ selector = "tagContainer3"; idTag = "tagspan3"; }
        if(id === "check4"){ selector = "tagContainer4"; idTag = "tagspan4"; }
        if(id === "check5"){ selector = "tagContainer5"; idTag = "tagspan5"; }
        if(id === "check6"){ selector = "tagContainer6"; idTag = "tagspan6"; }
        if(id === "check7"){ selector = "tagContainer7"; idTag = "tagspan7"; }
        if(id === "check8"){ selector = "tagContainer8"; idTag = "tagspan8"; }
        if (this.checked == true) {
            var contenedor = document.querySelector('#' + selector);
            var spans = contenedor.querySelectorAll("span");
            spans.forEach(function(span) {
            $("#Tags").append("<span class='badge rounded-pill bg-col1 text-body-tertiary2 ms-1' id ='" + idTag + "'>" + span.textContent +  " <img src='assets/img/circle-xmark-solid.png' width='15px' style='cursor: pointer;'></span>&nbsp;");
            });
            return true;
        }
        else{
            var spans = document.querySelectorAll('#' + idTag);
            spans.forEach(function(span) {
            span.remove();
            });
            return false;
        }
    }
    module.exports = getLink;
});