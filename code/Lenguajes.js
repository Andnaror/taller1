var lenguaje1;
var lenguaje2;

function recogerDatos() {
  lenguaje1 = document.querySelector("#leng1").value.split(",");
  lenguaje2 = document.querySelector("#len2").value.split(",");
}

var opcion = document.querySelector("#OS");
var realizar = document.querySelector(".realizar");
var volver = document.querySelector(".volver");
var valor;

opcion.addEventListener("click", function () {
  valor = opcion.value;
  document.querySelector("#resultado").innerHTML = "";
  var x = document.getElementById("box2");
  if (opcion.value == 4) {
    document.querySelector("#potencia").innerHTML =
      "<label> Potencia ^ n: <input type='text' id='pot1' /></label>";
  } else {
    document.querySelector("#potencia").innerHTML = "";
  }

  if (opcion.value == 4 || opcion.value == 6 || opcion.value == 7) {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

realizar.addEventListener("click", function () {
  recogerDatos();
  if (valor == 1) {
    document.querySelector("#resultado").innerHTML =
      "<p>L1 ∪ l2: " + union(lenguaje1, lenguaje2) + "</p>";
  }
  if (valor == 2) {
    document.querySelector("#resultado").innerHTML =
      "<p>L1 ∩ L2: " + interseccion(lenguaje1, lenguaje2) + "</p>";
  }
  if (valor == 3) {
    document.querySelector("#resultado").innerHTML =
      "<p>L1 - L2: " + diferencia(lenguaje1, lenguaje2) + "</p>";
  }
  if (valor == 4) {
    var pot = Math.round(document.querySelector("#pot1").value);
    document.querySelector("#resultado").innerHTML =
      "<p>L1<span>" +
      pot +
      "</span>" +
      "&nbsp&nbsp&nbsp: " +
      concatenacion(lenguaje1, lenguaje1, pot) +
      "</p>";
  }
  if (valor == 5) {
    document.querySelector("#resultado").innerHTML =
      "<p>L1.L2 : " + concatenacion(lenguaje1, lenguaje2, -1) + "</p>";
  }
  if (valor == 6) {
    document.querySelector("#resultado").innerHTML =
      "<p>L1" +
      "<span>-1</span>" +
      "&nbsp&nbsp&nbsp: " +
      inverso(lenguaje1) +
      "</p>";
  }
  if (valor == 7) {
    document.querySelector("#resultado").innerHTML =
      "<p>|L1| : " + cardinalidad(lenguaje1) + "</p>";
  }
});

volver.addEventListener("click", function () {
  location.href = "../index.html";
});
