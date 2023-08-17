function traerNumero(n1, n2) {
    const numero = document.getElementById(n1).value;
        return parseFloat(numero);
} // Funcion que guarda las variables y las convierte en Floats //

function traerOperacion() {
    let operacion = document.getElementById("operaciones").value;
    return operacion;
} //Funcion que guarda la funcion seleccionada//

function calcular() { // Funcion con el fin de hacer los calculos entre los numeros ingresados y la operacion seleccionada //
let num1 = traerNumero("numero1");
let num2 = traerNumero("numero2");
let operacion = traerOperacion();

if (isNaN(num1) || isNaN(num2)) { //Si ingresamos caracteres que no sean Numeros, salta este error//
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
        if(num2 == 0) { // Si ingresamos un 0 en el Numero2 salta el siguiente error // 
            window.alert("Error: No es posible dividir por 0. Ingrese otro numero");
         } else {
        resultado = (num1 / num2); }
    break;   
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function refrescar() {
    document.getElementById("numero1").value = num1;
    document.getElementById("numero2").value = num2;
  } 

  function borrar(){
    num1 = null;
    num2 = null;
    resultado = null;
    document.getElementById("resultado").innerHTML = resultado;
    refrescar();
} //Funcion para resetear la calculadora a 0 //