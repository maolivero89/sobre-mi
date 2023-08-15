function traerNumero(n1, n2) {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
        return parseInt(num1, num2);
}

function traerOperacion() {
    let operacion = document.getElementById("operaciones").value;
    return operacion;
}

function calcular() {
let numero1 = traerNumero("numero1");
let numero2 = traerNumero("numero2");
let operacion = traerOperacion();
switch (operacion) {
    case "suma":
        resultado=(numero1 + numero2);
    break;

    case "resta":
        resultado= (numero1 - numero2);
    break;

    case "multiplicacion":
        resultado= (numero1 * numero2);
    break;

    case "division":
        resultado = (numero1 / numero2);
    break;

    
    }
    document.getElementById("resultado").innerHTML = "El resultado es: "+resultado;
}

function borrar() {
    document.getElementById("").reset();
  }