//FUNCIONES CON JAVASCRIPT 
/* 
una función es un bloque de codigo reutilizable que realiza una tarea en especifico 
Nos permite escribir codigo mas organizado y evitar repetir instrucciones 

*/
//SINTAXIS BÁSICA DE UNA FUNCIÓN
//paso 1: la definicion de la funcion
function saludar() {
    console.log("Hola mundo!")
}
//paso 2: llamar a la funcion,o la estamos ejecutando 
saludar()
saludar()
saludar()//puedo llamarla cuantas veces quiera

//podemos crear una funcion con parametros y argumentos
function saludarPersona(nombre){
    console.log("Hola",nombre, "!")

}
//aqui nombre es un parametro y "Pedro " es el argumento 
saludarPersona("Pedro")
saludarPersona("guadalupe")
saludarPersona("Lucia")

//Sino  especificamos un return, la funcion nos devuelve undefined
console.log("Ejecuto saludar()",saludar() )

//una funcion puede devolver un valor return 
function suma(num1,num2){
    return num1 + num2
}
 console.log(suma(1,2))
 console.log(suma(4,10))
 console.log(suma(7,3))

 