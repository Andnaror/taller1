var alfa = document.querySelector(".alfabeto");
var leng = document.querySelector(".lenguaje");
var pala = document.querySelector(".palabra");

alfa.addEventListener("click", function () {
    location.href = "../alfabetos.html";
});

leng.addEventListener("click", function () {
    location.href = "../lenguajes.html";
});

pala.addEventListener("click", function () {
    location.href = "../palabras.html";
});