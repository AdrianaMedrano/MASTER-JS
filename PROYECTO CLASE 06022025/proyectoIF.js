/*Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota.*/
let notaNumeroEnteroRandom = Math.floor(Math.random() * 101)//Mathfloor redondea el numero hacia abajo
let mensaje //indefinida para añadirle despues su valor

if (notaNumeroEnteroRandom > 0) {
  // Determinar el rango de la nota utilizando operadores de comparación
  if (notaNumeroEnteroRandom >= 90) {
    mensaje = "Excelente";
  } else if (notaNumeroEnteroRandom >= 75 && notaNumeroEnteroRandom < 90) {
    mensaje = "Bien";
  } else if (notaNumeroEnteroRandom >= 60 && notaNumeroEnteroRandom < 75) {
    mensaje = "Suficiente";
  } else {
    mensaje = "No aprueba";
  }

  console.log(`La nota del estudiante es ${notaNumeroEnteroRandom}. Resultado: ${mensaje}`) //imprime la nota y el resultado
} else {
  console.log("La nota no es válida (debe ser mayor a 0)."); //por si se añade un valor menor a 0
}
