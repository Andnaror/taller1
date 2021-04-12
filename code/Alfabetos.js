var alfabeto1;
var alfabeto2;

function recogerDatos() {
    alfabeto1 = document.querySelector("#alf1").value.split(",");
    alfabeto2 = document.querySelector("#alf2").value.split(",");
}

var opcion = document.querySelector(".form-select");
var realizar = document.querySelector(".realizar");

var valor;

opcion.addEventListener("click", function () {
    valor = opcion.value;
    document.querySelector("#resultado").innerHTML = "<p></p>";
    
});

realizar.addEventListener("click", function () {
    recogerDatos();
    if (valor == 1) {
        document.querySelector("#resultado").innerHTML =
            "<p class='alert alert-info'>A1 ∪ A2: " + union(alfabeto1, alfabeto2) + "</p>";
    }
    if (valor == 2) {
        document.querySelector("#resultado").innerHTML =
            "<p class='alert alert-info'>A1 ∩ A2: " + interseccion(alfabeto1, alfabeto2) + "</p>";
    }
    if (valor == 3) {
        document.querySelector("#resultado").innerHTML =
            "<p class='alert alert-info'>A1 - A2: " + diferencia(alfabeto1, alfabeto2) + "</p>";
    }
});

limpiar.addEventListener("click", function () {
    location.href = "../alfabetos.html";
});

