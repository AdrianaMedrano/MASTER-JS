//Crear un arreglo
let frutas = ["Durazno", "Manzana", "Kiwi", "Mango", "Kiwi", "Aguacate", "Piña", "Manzana","Piña", "Mango", "Piña", "Pera"]
console.log("Lista de frutas:", frutas);

let conteoFrutas = {};

// uso for para recorrer el arreglo y contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } 
    else {
        conteoFrutas[fruta] = 1;
    }
}
for (let fruta in conteoFrutas) {
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}