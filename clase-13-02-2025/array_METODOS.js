//metodos es con parentesis () como ejemplo esta push()
//las propiedades en array no llevan parentesis solo va el nombre de la variablePUNTOpropiedad

let frutas = ["manzana"] //CREAMOS EL ARREGLO 
let otrasFrutas = ["UVA, aguacate"]
//MÉTODOS COMUNES EN ARREGLOS
//.push() --> agrega un elemento al FINAL del arreglo 
frutas.push("pera")
frutas.push("guayaba")
frutas.push(otrasFrutas) // --> lenght = 4 , porque agrega todo el arreglo en la ultima posición pero ocupando la misma posición
console.log("despues de push", frutas);

//.pop() --> Elimina el ÚLTIMO elemento del arreglo 
console.log(frutas.pop()); //obtengo el último elemento y lo saco de la estructura
console.log("Despues de pop", frutas);

//.unshift(<nuevo Elemento>)  -> Agregamos un elemento al INICIO del arreglo
frutas.unshift("melon")
console.log("Despues de unshift", frutas);
//.shift() -> Elimina el PRIMER ELEMENTO
console.log(frutas.shift());
console.log("despues de shift", frutas);
//.map() --> Recorre todos los elementos y los modifica según la condición 
//-----EL ARREGLO ORIGINAL NO SE MODIFICA----

//EJEMPLO 1: multiplicamos cada elemento (item) del arreglo x 2 
let numeros = [1,2,3]
let numerosPorDos = numeros.map( (numero) => numero * 2 //la flecha sustituye function y {}
)
console.log("numeros multiplicados por dos", numerosPorDos)

//EJEMPLO 2: convertir cada fruta en mayusculas
let frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase()) //toUpperCase convierte caracteres en mayusculas
console.log("Frutas en mayuscula", frutasEnMayusculas)
//.toLowerCase convierte caracteres en minuscula 
let FrutasEnMinusculas = frutas.map((fruta)=> fruta.toLowerCase())
console.log("frutas en minusculas", FrutasEnMinusculas)

//.sort() -> devuelve un arreglo ordenado dependiendo de las carateristícas que pida, lo hace de forma alfabetica o numerica
//ejemplo, ORDENAR ALFABETICAMENTE. Este metodo modifica el arreglo original 
let verduras = ["espinaca", "zanahoria", "calabaza"]
console.log(verduras.sort()) //Ordena el arreglo de manera alfabetica si no colocamos ningun argumento


// .sort() con numeros -> IMPORTANTE que si usamos sort directametne con numeros los ordenara como como texto
let numerosOrdenadosIncorrectamente = [11,2,9,98,21,6,55]
console.log("Numeros ordenados incorrectamente", numerosOrdenadosIncorrectamente.sort())
//para ordenar correctamente tenemos que proporcionar una función de comparación 
let numerosOrdenadosCorrectamente = [11,2,9,98,21,6,55]
console.log("Numeros ordenados correctamente", numerosOrdenadosCorrectamente.sort((num1, num2)=> num1-num2))
//la funcion de comparacion toma dos numeros (num1 y num2)
//si num1 es MENOR que num2, la resta da un número negativo, entonces num1 va antes que num2
//si num1 es MAYOR que num2, la resta da un número positivo, entonces num1 va despues de num2 
//si num1 y num2 son iguales, la resta da 0 y su orden no cambia 
/*
NOTA: Estas opciones se van a repetir en cada iteración  
 */
let numerosOrdenadosMayorMenor = [11,2,9,98,21,6,55]
console.log("Num ordenados mayor amenor", numerosOrdenadosCorrectamente.sort((num1,num2)=> num2-num1))

