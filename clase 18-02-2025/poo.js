/* 
    POO 
    CLASE: ES UNA PLANTILLA PARA CREAR OBJETOS. DEFINE ATRIBUTOS Y METODOS.
    SE DEFINE CON LA PALABRA RESERVADA CLASS SEGUIDO DEL NOMBRE EMPEZANDO CON MAYUSCULA Y EN SINGULAR.
    -OBJETO: ES LA INSTANCIA DE UNA CLASE, CON SUS PROPIOS VALORES PARA LOS ATRIBUTOS DEFINIDOS EN LA CLASE
    -ATRIBUTO: SON LAS CARACTERISTICAS O PROPIEDADES DE UNA CLASE 
    -METODOS: SON LAS FUNCIONES DENTRO DE UNA CLASE QUE DEFINEN EL COMPORTAMIENTO DE LOS OBJETOS
    -CONSTRUCTOR: ES UN METODO ESPECIAL DE UNA CLASE QUE SE EJECUTA AUTOMATICAMENTE AL CREAR UN OBJETO.
    SIRVE PARA INICIALIZAR LOS ATRIBUTOS DE LA CLASE



*/
let edad = "una edad"
let nacionalidad = "una nacionalidad"
//PASO 1. DEFINIION DE UNA CLASE CON SUS ATRIBUTOS 
class Persona {

    //ATRIBUTOS dentro del constructor
    constructor(nombre,edad, nacionalidad) {
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }
//METODOS de la CLASE
saludar(){
    console.log("Hola, mi nombre es", this.nombre, "tengo", this.edad, "años, soy", this.nacionalidad)
}
despedir(nombreAmigo){
    console.log("Hasta luego",nombreAmigo)
}
}
//PASO 2 Creación de/los objetos a partir de la clase 

let persona1 = new Persona("Pedro", 23, "mexicano")

console.log(persona1)
// PASO 3 Llamar a los metodos de mi objeto
persona1.saludar()
persona1.despedir("Fernando")
//EJERCICIO: Crear un objeto a partir de la clase persona con los datos de nombre 
//new es una persona reservada que me ayuda a ejeutar el metodo constructor  que me ayuda a 
//darle valores a los atributos de mi nuevo objeto
let persona2 = new Persona ("lucia", 30, "canadiense")
persona2.despedir("Mario")