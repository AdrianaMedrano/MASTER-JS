//Combinanado while y for con arreglos 
//Ejemplo 1: Recorrer un arreglo con while
let frutas = ["MANZANA ", "UVA", "FRESA"]
let index = 0
while (index < frutas.length){
    console.log("fruta", index, ";", frutas[index])
    index++
}

//Ejemplo 2: Recorrer un arreglo con for
for (let index = 0; index <= frutas.length - 1; index ++){
    console.log("fruta", index,";", frutas[index])
}