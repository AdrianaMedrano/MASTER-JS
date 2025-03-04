let librosLeidos = [];

function agregarLibro(titulo) {
  librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
  if (librosLeidos.length === 0) {
    console.log("No has leído ningún libro aún.");
  } else {
    console.log("Libros que has leído:");
    for (let i = 0; i < librosLeidos.length; i++) {
      console.log(`${i + 1}. ${librosLeidos[i]}`); /* ${i + 1}------> imprime el número del libro (empezando en 1 en lugar de 0).
      ${librosLeidos[i]}------> muestra el título del libro en el índice i del array librosLeidos.*/
    }
  }
}

agregarLibro("El Espejo en el espejo");
agregarLibro("Doce cuentos peregrinos");
agregarLibro("Momo");
agregarLibro("Un mundo feliz");

mostrarLibrosLeidos();
