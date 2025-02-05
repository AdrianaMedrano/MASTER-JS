/* 
    TIPOS DE DATOS EN JAVASCRIPT
*/

// Tipo: NUMBER Número
var edad = 25
var precio = 100.50
var puntos = 0
var temperatura = -19

// Tipo: STRING (texto)
var nombre = "Valery" //con comillas dobles
var saludo = 'hola, ¿Cómo estas?' //con comillas simples
var character = "a" //no debe tener saltos de línea
var edadCadena = "25"

// Tipo: BOOLEAN (booleano)
var esMayor = true //verdadero 
var tienePermiso = false //falso

// Tipo: Symbol (identificadores unicos)
var identificador1 = Symbol("id")
var identificador2 = Symbol("id")

// Tipo: BigInt (números muy grandes)
var numeroGrande = 3444444444444444n // la n al final indica que estoy manipulando numeros enormes 

// Tipo: NULL (nulo)
// Tipo: UNDEFINED (indefinido )
// Tipo: NaN

//NULL (valor vacio intencionalmente)
var vacio = null

//UNDEFINED (valor no asignado)
var sinDefinir 

//Tipo NaN (Not a Number - Un no Número, esto pasa cuando una operación es un número no válido)
var resultadoInvalido = "Hola" * 10

/*
¿Qué es CONSOLE LOG?
    console.log se usa para mostrar valores en el navegador 
    es util para depurar y entender cómo funcionana las variables en el código
*/
console.log(edad)
console.log(nombre)

/*
¿Qué es typeof?
    nos permite conocer el tipo de dato de una variable
    es útil para depuración y validaciones de código
*/

console.log(typeof edad)
console.log(typeof edadCadena)
