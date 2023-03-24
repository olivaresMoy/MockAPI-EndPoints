// Función para limitar a 2 líneas el nombre de la tarjeta
document.querySelectorAll(".-b-expander").forEach(function(el) {
    el.addEventListener("click", () => {
      el.classList.toggle("-b-text-undexpanded");
    });
});

// Función para realizar la busqueda de tags
document.addEventListener("keyup", e=>{
  if (e.target.matches("#buscador")){
    var input, filter, section, span, text, i;
    input = document.getElementById("buscador");
    filter = input.value.toUpperCase();
    section = document.getElementById("listaTags");
    span = section.getElementsByTagName("span");
    for (i = 1; i < span.length; i++) {
      text = span[i].getElementsByTagName("i")[0];
      if (text) {
        if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
          span[i].style.display = "";
        } else {
          span[i].style.display = "none";
        }
      }
    }
  }
});

//  Funcion para leer de la API
$("#buscador").focus( cargaAjax );
$("#buscador").focusout( cargaAjax );
$( window ).on( "load", cargaAjax );
function cargaAjax() {
    
    $.ajax({
     type: "GET",
     url: "https://64137b96a68505ea7334a07d.mockapi.io/tags",
     contentType: "application/json; charset=utf-8",
     dataType: "json",
     success: function (data) {
      $('#listaTags').empty();
      $.each(data, function (i, item) {
      var rows = "<span class='tag block'><span class='badge rounded-pill bg-col1 text-body-tertiary2'>" +
      "<i>+ " + item.name + "</i></span>";
      $('#listaTags').append(rows);
      });
      console.log(data);
     },
     failure: function (data) {
      alert(data.responseText);
     },
     error: function (data) {
      alert(data.responseText);
     }
    });
}


//Agregar datos al JSON
function ingresarDatos(){
    // datos mandados con la solicutud POST
    var value = document.getElementById('buscador').value;
let _datos = {
    
    name: value, 
    
  }
  
  fetch('https://64137b96a68505ea7334a07d.mockapi.io/tags', {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json));
}

mytag1 = document.getElementById('chTag');
mytag2 = document.getElementById('chTag2');

var bandera = true
check1.addEventListener("change", function(){
   
   if(bandera ){
        mytag1.style.display = '';
        mytag2.style.display = '';
        bandera = false
        
   }
   else{
    mytag1.style.display = 'none';
    mytag2.style.display = 'none';
    bandera = true
   }
   
  })
  
 