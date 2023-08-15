function traerNumero(n1, n2) {
    const numero = document.getElementById(n1).value;
        return parseInt(numero);
}

function traerOperacion() {
    let operacion = document.getElementById("operaciones").value;
    return operacion;
}

function calcular() {
let num1 = traerNumero("numero1");
let num2 = traerNumero("numero2");
let operacion = traerOperacion();

if (isNaN(num1) || isNaN(num2)) {
    alert("Error: Por favor, Ingrese valores numéricos válidos en todos los campos.");
    return;
 }
switch (operacion) {
    case "suma":
        resultado=(num1 + num2);
        break;

    case "resta":
        resultado= (num1 - num2);
    break;

    case "multiplicacion":
        resultado= (num1 * num2);
    break;

    case "division":
        resultado = (num1 / num2);
    break;

    
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function refrescar() {
    document.getElementById("numero1").value = num1;
    document.getElementById("numero2").value = num2;
  }

  function borrar(){
    num1 = 0;
    num2 = 0;
    refrescar();
}