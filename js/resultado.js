function leerResultado(){

  let direccion = document.location.search;
  let igual = direccion.lastIndexOf("=");
  let numero = direccion.slice(igual + 1);
  var resultado = parseInt(numero);

  if(resultado >= 70){
    var elemento1 = document.querySelector ("#feedback_mal");
    elemento1.style.display= "none";

    var elemento2 = document.querySelector("#feedback_bien");
    elemento2.style.display= "block"; 

  }else{

    var elemento1 = document.querySelector("#feedback_bien");
    elemento1.style.display= "none";                       
    var elemento2 = document.querySelector("#feedback_mal");
    elemento2.style.display= "block";
  }
  document.querySelector("#puntos").textContent = resultado;
}

function volver(){
  document.location.href = "index.html";
}

window.addEventListener("load", leerResultado);
