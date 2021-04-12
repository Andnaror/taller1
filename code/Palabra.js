var palabra;

function recogerDatos() {
  palabra1 = document.querySelector("#Palabra").value;
}

var cardinal = document.querySelector(".cardinalidad");
var invertir = document.querySelector(".inverso")
var volver = document.querySelector(".volver");

cardinal.addEventListener("click", function () {
  recogerDatos();
  var text = palabra1.length;
  if (text == "") text = "Ø";
  document.querySelector("#resultado").innerHTML = "<p class='alert alert-info'>|P1| : " + text + "</p>";
});

invertir.addEventListener("click", function(){
    invertir = document.querySelector("#Palabra").value.split(",");
    document.querySelector("#resultado").innerHTML =
      "<p class='alert alert-info'>P1" +
      "<sup>-1</sup>" +
      ":" +
      inverso(invertir) +
      "</p>";
     
});

volver.addEventListener("click", function () {
  location.href = "../index.html";
});