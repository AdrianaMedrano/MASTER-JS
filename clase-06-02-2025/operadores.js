




/* 
EJEMPLO DE JERARQUIA DE OPERADORES MATEMATICOS

*/
//EJEMPLO DE JERARQUÍA
let operacio1 = 10+5*2 //10 + 5 (5*2)=20
let operacio2 = (10+5)




/* OPERADORES DE COMPARACION  
Siempre va a devolver un valor boleano= true o false 


*/
let cinco = 5
let cincoCadena = "5"
//
cinco == cincoCadena //igualdad debil, AQUI ARROJA UN -TRUE-;compara solo el valor no el tipo de dato 
cinco === cincoCadena //igualdad estricta, AQUI ARROJA UN -FALSE-; compara el tipo de dato y no solo el valor
//desigualdad debil 
//igualdad estricta 
let mayor = 10 > 5 //mayor que 
let menor = 3 < 8 //menor que 
let igual = 5 == "5"
let estrictamente = 5 === "5" //comparación estricta de valor 
let diferente = 5 != "5" //DIFERENTE = aqui arroja -FALSE- en la consola
let estrictamenteDiferente = 5 !== "5" //estrictamente diferente  -TRUE-
console.log(mayor, menor, igual, estrictamente ,estrictamenteDiferente)

//OPERADORES LOGICOS 
let and = (10 > 5) && (3 < 8) //AND true
let or = (10 > 5) || (3 < 8 ) //OR true 
let not = !(10 > 5) //NOT false

console.log(and,or,not);


//JERARQUÍA DE OPERADORS LÓGICOS 
/*
1 NOT (!)   SE EVALUA PRIMERO
2 AND (&&) 
3 OR (||)




*/

//EJEMPLO DE OPERADORES LOGICOS
let logico1 = true || false && false //primero evaluo el AND  = true || false = true
let logio2 = (true || false) && false //(true) && false = false
