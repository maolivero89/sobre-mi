# Calculadora con JS


<img src= https://github.com/maolivero89/sobre-mi/blob/main/PracticoN1/calculadora/imgcalculadora.jpg>

**Calculadora desarrollada para practico1 de "Páginas Web con Componentes Dinámicos"**
#### FAMAF - UNC
#### Argentina Programa




### INSTRUCCIONES DE USO

- Ingrese un numero en el primer campo.
- Ingrese otro numero en el segundo campo.
- Despliegue el menu y elija la operacion que desee realizar.
- Apretar el boton calcular. Su resultado aparecera debajo.
- Para resetear la calculadora, apretar el boton Borrar.
- Solo se puede ingresar numeros(enteros o decimales), si usted ingresa letras, el programa no seguira, y le pedira volver a intentar con numeros.







### Casos de prueba:

1- SUMA: 1ero numero ingresado : *100*, 2do numero ingresado *352*. Calculo obtenido **452**. El resultado es el esperado.

2- RESTA: 1ero numero ingresado : *1545*, 2do numero ingresado *787*. Calculo obtenido **758**. El resultado es el esperado.

3- RESTA: 1ero numero ingresado : *541*, 2do numero ingresado *984*. Calculo obtenido **-443**. El resultado es el esperado.

4- MULTIPLICACION: 1ero numero ingresado : *198*, 2do numero ingresado *320*. Calculo obtenido **63360**. El resultado es el esperado.

5- MULTIPLICACION: 1ero numero ingresado : *0.21*, 2do numero ingresado *3.52*. Calculo obtenido **0.7392**. El resultado es el esperado.

6- SUMA: 1ero numero ingresado : *-32*, 2do numero ingresado *3.52*. Calculo obtenido **-28.48**. El resultado es el esperado.

7- DIVISION: 1ero numero ingresado : *1400*, 2do numero ingresado *225*. Calculo obtenido **6.22222222**. El resultado es el esperado.

8- DIVISION: 1ero numero ingresado : *254*, 2do numero ingresado *0*. La calculadora nos alerta lo siguiente: "Error: No es posible dividir por 0. Ingrese otro numero". El resultado es el esperado.

9- DIVISION: 1ero numero ingresado : *0*, 2do numero ingresado *23455*. Calculo obtenido **0**. El resultado es el esperado.


### Problemas encontrados:
```
1- En Case: division: 

case "division":
        if(num2 == 0); {
            window.alert("Error: No es posible dividir por 0. Ingrese otro numero");
         } 
        resultado = (num1 / num2); 
    break; 

    **Me toma siempre como verdadero el IF** y luego ejecuta el resultado de igual forma.

```    

**_SOLUCION_**: SACAR PUNTO Y COMA LUEGO DEL PARENTESIS DEL IF Y AHORA AGREGAR ELSE.

```
case "division":
        if(num2 == 0)**;** {
            window.alert("Error: No es posible dividir por 0. Ingrese otro numero");
         } else {
        resultado = (num1 / num2)}
    break; 

```

2- En la funcion borrar(), queda impreso en pantalla resultado = 0, cuando apretamos el boton borrar.

```
function borrar(){
    num1 = 0;
    num2 = 0;
    resultado = 0;
    document.getElementById("resultado").innerHTML = resultado;
    refrescar();
}
```

**_SOLUCION_**: resultado = null; Esto quita el ultimo resultado impreso.

```
function borrar(){
    num1 = null;
    num2 = null;
    resultado = **null**;
    document.getElementById("resultado").innerHTML = resultado;
    refrescar();
}
```




Tecnologías:
- HTML
- Css
- JavaScript