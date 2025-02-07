/*estructura de control
   -permite ejecutar codigo solo si se cumple una condicion
   -puede usarse con operadores de comparacion y logicos
    */
let edad = 18 
let tieneINE = false

//condicional simple
if (edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar")

}
//condicional con else
if (edad >= 18 && tieneINE){
    console.log("Tienes los requisitos para votar")

}
else{
    console.log("Uno o mas requisitos no se cumplen, verifica tu información")
}
console.log ("fin de la ejecucion")

//condicional con else if 
if(edad <13) {
    console.log("eres un niño")
}
else if (edad < 18){
    console.log("eres un adolescente")
}
else{
    console.log("eres un adulto")

}

let tieneEntrada = false
if(!tieneEntrada == false){
    console.log("Debes comprar una entrada")
}
console.log("fin se la ejecucion")
