
const comentarioForm = document.getElementById('comentarioForm');

const comentarioInput = document.getElementById('comentarioInput');

const comentariosContainer = document.getElementById('comentariosContainer');

// FUNCION PARA AGREGAR UN COMENTARIO
function agregarComentario(comentario) {
    
    const fecha = new Date().toLocaleString();// para la fecha y hora actuales

    const comentarioDiv = document.createElement('div');//div para el comentario
    comentarioDiv.classList.add('comentario');
    //crear el contenido del comentario
    comentarioDiv.innerHTML = `
        <p>${comentario}</p>
        <p class="fecha">Publicado el ${fecha}</p>
        <button class="eliminar">Eliminar</button>
    `;

    comentariosContainer.appendChild(comentarioDiv);//agrega el comentario al contenedor

    //evento para eliminar el comentario
    const eliminarBtn = comentarioDiv.querySelector('.eliminar');
    eliminarBtn.addEventListener('click', function() {
        comentarioDiv.remove(); //elimina el comentario al hacer clic
    });
}

//evento para manejar el formulario y agregar el comentario
comentarioForm.addEventListener('submit', function(event) {
    event.preventDefault(); //esto evita la recarga de la página
    const comentarioTexto = comentarioInput.value.trim(); //obtiene el texto

    if (comentarioTexto) {
        agregarComentario(comentarioTexto); //agrega comentario
        comentarioInput.value = ''; //limpia el campo de texto
    }
});