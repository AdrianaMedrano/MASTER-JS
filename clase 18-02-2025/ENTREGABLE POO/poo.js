
class libro{

    constructor (titulo,autor,anio,estado, capitulos){
        this.titulo = titulo;     // Título del libro
        this.autor = autor;       // Autor del libro
        this.anio = anio;         // Año de publicación
        this.estado = estado;     // Estado del libro (disponible o prestado)
        this.capitulos = []; 
    }

    // Método para describir el libro
     describirLibro() {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }


    // Método para agregar un capítulo al libro
    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo); // Agrega un capítulo a la lista de capítulos
        console.log(`Capítulo "${capitulo}" agregado.`);
    }

    // Método para eliminar un capítulo del libro
    eliminarCapitulo(capitulo) {
        const index = this.capitulos.indexOf(capitulo); // Busca el índice del capítulo
        if (index !== -1) {
            this.capitulos.splice(index, 1); // Elimina el capítulo de la lista si lo encuentra
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`El capítulo "${capitulo}" no existe.`);
        }
    }

    // Método para mostrar la lista de capítulos
    mostrarCapitulos() {
        if (this.capitulos.length > 0) {
            console.log("Capítulos del libro:");
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        } else {
            console.log("Este libro no tiene capítulos.");
        }
    }
}
// Solicitar datos al usuario para crear un libro
const titulo = prompt("Ingrese el título del libro:");
const autor = prompt("Ingrese el autor del libro:");
const anio = parseInt(prompt("Ingrese el año de publicación del libro:"), 10);
const estado = prompt("Ingrese el estado del libro ('disponible' o 'prestado'):");


const miLibro = new libro(titulo, autor, anio, estado);

console.log(miLibro.describirLibro());