// Seleccionar el formulario y el contenedor de comentarios
const form = document.getElementById('comentariosForm');
const comentariosList = document.getElementById('comentariosList');

// Función para manejar el envío del formulario de comentarios
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío predeterminado del formulario
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    if (nombre && comentario) {
        // Obtener la fecha y hora actual
        const fecha = new Date();
        const fechaFormateada = fecha.toLocaleString();  // Formato: 'MM/DD/YYYY, HH:mm:ss'

        // Crear el HTML para el nuevo comentario
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        
        nuevoComentario.innerHTML = `
            <p class="autor">${nombre}</p>
            <p class="fecha">${fechaFormateada}</p>
            <p class="texto">${comentario}</p>
        `;

        // Agregar el nuevo comentario al contenedor
        comentariosList.prepend(nuevoComentario);

        // Limpiar los campos del formulario
        form.reset();
    }
});
