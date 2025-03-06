// Función que genera una contraseña aleatoria
function generatePassword() {
    const charsetLower = "abcdefghijklmnopqrstuvwxyz"; // minúsculas
    const charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // mayúsculas
    const charsetNumbers = "0123456789"; // Números
    const charsetSymbols = "!@#$%^&*()_-+=<>?/"; // Símbolos especiales
    const length = document.getElementById("length").value; // Longitud seleccionada por el usuario

    let charset = charsetLower; // Comenzamos solo con minúsculas

    if (document.getElementById("uppercase").checked) {
        charset += charsetUpper;
    }
    if (document.getElementById("numbers").checked) {
        charset += charsetNumbers;
    }
    if (document.getElementById("symbols").checked) {
        charset += charsetSymbols;
    }

    let password = ""; // esta variable almacena la contraseña generada
    
    // Ciclo que genera la contraseña carácter por carácter, selecciona un carácter "aleatorio" de la lista de caracteres disponibles
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    // Imprimimos la contraseña generada en el campo de texto
    document.getElementById("passwordField").value = password;

    // Verificamos automáticamente la seguridad de la contraseña
    checkPasswordSecurity(password);
}

// Verificación de la seguridad de la contraseña
function checkPasswordSecurity(password) {
    const length = password.length; // Longitud de la contraseña
// segun la cantidad de caracteres, consideramos que la seguridad es baja, media o alta
    let securityLevel = "Baja"; // Asumimos inicialmente que la seguridad es baja
    if (length >= 10 && length <= 12){
        securityLevel = "Media"
    }
    if (length >= 13) {
        securityLevel = "Alta";
    }

    // Mostramos el nivel de seguridad en el contenedor
    document.getElementById("securityResult").innerText = `Seguridad: ${securityLevel}`;
}

// Actualizamos la longitud en tiempo real cuando el usuario mueve la barra deslizante
document.getElementById("length").addEventListener("input", function() {
    document.getElementById("lengthValue").innerText = this.value;
});
