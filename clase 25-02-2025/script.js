class Producto{

    constructor(nombre, precio, categoria){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
         }

    mostrarInfo(){      
        //las comillas invertidas me ayudan a implementar la sintaxis de template string
        //este tipo de cadenas de texto me permite envever cadenas de caracteres con variables
        //para agregar una variable a la cadena de texto usamos la sintaxis ${nombre_variable}
        return 'Producto: ${this.nombre} | categoria: ${this.categoria} | precio: $$(this.precio)'
    }
}
class ProductoConDescuento extends Producto{
    constructor (nombre, precio, categoria,descuento){
        super(nombre,precio,categoria)
        this.descuento = descuento
    }

    calcularPrecioFinal(){
        return this.precio - (this.precio * this.descuento / 100)
    }
//sobreescritura de metodos
//podemos sobrescribir el metodo mostrarInfo de la clase padre para ajustar la acción del metodo a
//lo que la clase hija necesita
    mostrarInfo(){
        return 'producto: ${this.nombre} | categoria: ${this.categoria} | precio original: $$(this.precio) | precio Con Descuento: $${this.calcularPrecioFinal()}}'}
    }
let refri = new Producto ("Refrigerador", 1200, "Electronica")
console.log (refri.mostrarInfo());

let termo = new ProductoConDescuento("termo 13oz", 700, "cocina", 20)
console.log(termo.mostrarInfo())


//---------CAPTURAMOS EL FORMULARIO DEL DOM-----------------------------------------

const formulario = document.getElementById("producto-form")
const listaProductos = document.getElementById("lista-productos")

//.addEventListener es un metodo que ayuda a escuchar cuando se dispara un evento en particular
//(onClick, onSubmit,etc)
//ESTE METODO RECIBE COMO PARAMETROS DOS VALORES:
//1RO....... Nombre del evento que tiene que escuchar (click, submit,etc)
//2DO.......funcion que se va a ejecutar cuando se escuche el evento

formulario.addEventListener("submit", function(event){
    event.preventDefault() //PREVEENIR ELENVIO DEL FORMULARIO , QUE SE REFRESQUE LA PANTALLA
    console.log(event)

    //obtener los valores 
    const nombre =document.getElementById("nombre").value
    const precio = parseFloat(document.getElementById("precio").value)
    const categoria = document.getElementById("categoria").value
    const descuento = parseFloat(document.getElementById("descuento").value)
 
    //crear un elemento de lista y agregarlo al DOM
    const item = document.createElement(li)

    let nuevoProducto;
    if (descuento > 0){
        nuevoProducto = new ProductoConDescuento(nombre,precio,categoria,descuento)
        item.classlist.add("Descuento")
    } else{
    nuevoProducto = new Producto (nombre, precio, categoria)
    }

//despliego la informaci+on del producto en el html 
//agrego el elemento de la lista que cree en el contenedor ul que es la lista de productos
    item.textContent = nuevoProducto.mostrarInfo()
    listaProductos.appendChild(item)
})