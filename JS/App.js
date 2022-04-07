//Callback
function saludar(nombre) {
    alert('Bienvenido ' + nombre + ' ' + 'mira los nuevos productos agregados recientemente.');
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt('Ingresa tu nombre de usuario');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

//async 1
function descargaProductos() {
    
    return new Promise ( resolve => {
        alert("Cargando los productos...");

        setTimeout ( () => {
            resolve("Carga Finalizada");
        }, 3000 );
    });
}
//async 2
async function app() {
    try {
        const resultado = await descargaProductos();
        alert("PRODUCTOS");
        alert(resultado);
    } catch (error) {
        alert(error);
    }
}
app();
// Eventos DOM (Document Object Model)
document
.getElementById ("formulario-producto")
.addEventListener("submit", function(evento) {
    //evaluar el comportamiento del formulario
    evento.preventDefault();//guarda y refresca la pantalla al memonto de un cambio
    //obtener los valores del formulario
    const nombre = document.getElementById ("nombre").value,
    precio = document.getElementById ("precio").value,
    año = document.getElementById("año").value;    
    //Crear un nuevo objeto "producto"
    const producto = new Producto (nombre, precio, año); 
    //Crear un nuevo usuario de interfaz
    const ui = new UI();
    //Input de validacion de usuario
    if (nombre==="" || precio=== "" || año=== "") {
        ui.showMessage("Porfavor ingresar datos");
    }
    //Guardar Productos
    ui.addProducto(producto);
    ui.showMessage("Precio agregado");
    ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (e) =>{
    const ui= new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
});
//Clase de Producto
class Producto {
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}
//Clase Usuario interfaz

class UI{
    addProducto(producto){
        const productolista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML= `<br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        
        <div class="targeta texto margen4" style="margin-top: -450px; margin-left: 420px;">
        <div class="targeta-body">
            <strong>Producto</strong> : ${producto.nombre}-
            <strong>Precio</strong> : ${producto.precio}-
            <strong>Año</strong> : ${producto.año}-
            <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
    </div>
    `;
    productolista.appendChild(elemento); // appendChild = objeto hijo
    // Promise 
    const Fiesta = new Promise ((resolve, reject)=> {
        const auth2 = true;
        if(auth2){
            resolve("Si se agrego a tabla");//se cumple el promise
        }else{
            reject("No se agrego a tabla");//No se cumple el promise
        }
    });
    
    Fiesta
    .then (resultado => alert(resultado))
    .catch (error => alert(error))
}
    //resetear valores de formulario
    resetForm() {
        document.getElementById ("formulario-producto").reset ();
    }
    deleteProducto(elemento) {
        if (elemento.nombre === "eliminar"){
            elemento.parentElement.parentElement.remove();
            this.showMessage("El producto se a eliminado")
        }
    }

    showMessage(mensaje, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));

        //Mostrar en el DOM
        const contenido = document.querySelector(".container");
        const app = document.querySelector("#App");

        //Insertar mensaje en el interfaz usuario
        setTimeout(function(){
                document.querySelector(".alert", remove());
            },3000);
        }
}