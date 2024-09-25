// /* CONFIRMACION DE EDAD */
// let edad = window.prompt("ingrese su edad")


// if (edad > 17){ 
//     console.log("Bienvenido a la Casa de Cambio $$$!")
// }
// else{ console.log("Acceso denegado por incumplimiento de politicas.")

// }

/*Casa de cambio - Conversor de dinero para peso Uruguayo.*/

// let libra = 52;
// let euro = 43;
// let dolar = 40;
// let real = 8;
// let yen = 1;


//  const moneda = prompt("introduce un tipo de cambio que quieras convertir!")
 

// function convertir(cantidad, moneda){
    
    
//     if( moneda == libra ){ 
//         return ("£" +" "+ (cantidad=prompt("introduce un monto")) / libra)
//     }
//     if( moneda == euro ){
//         return ("€" +" "+ (cantidad=prompt("introduce un monto")) / euro)
//      }
     
//     if(  moneda == dolar){
//         return ("USD" +" "+ (cantidad=prompt("introduce un monto")) / dolar)
//      }
     
//     if(  moneda == real ){
//         return console.log("R$" +" "+ (cantidad=prompt("introduce un monto")) / real)
//      }
     
//     if( moneda == yen ){
//         return ("¥" +" "+ (cantidad=prompt("introduce un monto")) / yen)
//      }

//     else{ 
//         return "No existe ese tipo de cambio "
//     }
    
   
// }
// console.log(convertir(4000,libra))

/* SIMULADOR DE ECOMMERCE-AlQUILER DE HOSPEDAJES Y VIAJES PARA PROYECTO FINAL*/
/* Defino las clases primero para armar mis tipos de alquileres*/

// class Alquiler {
//       constructor(id,nombre,precio,categoria){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.categoria = categoria;
//     }

// }

// const alquileres =[ 
//     new Alquiler (1,"Departamento" ,"USD" +100,"Airbnb"),
//     new Alquiler (2,"Habitacion de hotel","USD" +200,"hoteles"),
//     new Alquiler (3,"Casa" , "USD" +250, "Casas"),
//     new Alquiler (4,"Cabaña","USD" +50,"Camping"),
// ]



// const alquilarViajes = () =>{
//     let interaccion = '';

//     do {
//         let tipoAlquiler =  prompt(generarMenuAlquileres());
//         let alquiler = validarAlquilerUsuario(tipoAlquiler);

//         if(alquiler){
//             alert(`El tipo de alquiler es: ${alquiler.nombre}`)
//         }else{
//             alert(`El hospedaje ingresado no es correcto`)
//             continue

//         }

//         interaccion = prompt("quieres reservar otro hospedaje? (SI - NO)");

//     }while(interaccion.toLowerCase() != "no");
  


// }
// const generarMenuAlquileres = () =>{
//     let menu = "Estos alquileres estan disponibles\n\n"
//     alquileres.forEach(alquiler =>{
//         menu+= `* ${alquiler.nombre} - ${alquiler.precio}\n`
//     });
//     menu+=`\n Ingrese el tipo de alojamiento que desea alquilar.`
//     return menu;

// }
// const validarAlquilerUsuario = (nombre) =>{
//     return alquileres.find(alquiler => alquiler.nombre.toLowerCase() === nombre.toLowerCase());

// }


// alert("Bienvenidos a ViajesDeVerano")

// let usuario = parseInt(prompt(` Eliga el numero de lo que desea realizar 

//     1 - Alquilar un alojamiento para su viaje.
//     2 - Consultar cupones o descuentos. 
//     3 - Salir del Sitio`));

// while(usuario !=3){

//     switch(usuario){
//         case 1:
//             alert(`consultando alojamientos disponibles hoy`);
//             alquilarViajes();
//             break;
//         case 2:
//             alert(`consultando promociones y cupones de descuento`);
//             alert(`No hay disponible ningun descuento de temporada aun`);
//             break;
//         default:
//             alert(`Asegurate de escribir correctamente una de las opciones`);    
//     }
//     usuario = parseInt(prompt(` Eliga el numero de lo que desea realizar 
//         1 - alquilar un alojamiento para su viaje.
//         2 - consultar cupones o descuentos. 
//         3 - Salir del Sitio`));   
// }
// alert(`Gracias por confiarnos tus viajes`)

// IMPLEMENTACION de DOM / EVENTOS / Storage & JSON AL PROYECTO //


// const contenedorCards = document.getElementById("alquileres-container")


// function crearCardsAlquileresInicio(productos){
//     productos.forEach(producto =>{
//         const nuevoAlquiler = document.createElement("div");
//         nuevoAlquiler.classList = "card-producto";
//         nuevoAlquiler.innerHTML = `
//           <img src="./assets/img/${producto.id}">
//           <h3>${producto.nombre}</h3> 
//           <p>${producto.precio}</p>
//           <button> Reservar </button>

//         `
//         contenedorCards.appendChild(nuevoAlquiler);
//         nuevoAlquiler.getElementsByTagName("button")[0].addEventListener("click",()=> guardarReserva(producto))
        
//     });
// }
 
// crearCardsAlquileresInicio(alquileres);

/* JS FINAL Proyecto Coder */

// Var Visibilidad del Carrito 
var carritoVisible = false;

// refrescar elementos 
if(document.readyState =='loading'){ 
    document.addEventListener('DOMContentLoaded', ready)
}else{ 
    ready();
}
// funcion al boton eliminar item del carrito
function ready(){ 
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0;i<botonesEliminarItem.length; i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito); 
    }
}
// funcion al boton sumar item al carrito
var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
for(var i=0;i<botonesSumarCantidad.length; i++){
    var button = botonesSumarCantidad[i];
    button.addEventListener('click',sumarCantidad);
    }
// funcion al boton restar item al carrito
var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
for(var i=0;i<botonesRestarCantidad.length; i++){
    var button = botonesRestarCantidad[i];
    button.addEventListener('click',restarCantidad);
}
//funcion al boton agregar al carrito 
var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }
// funcion boton comprar
document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)

// borrar todos los elementos del carrito y ocultar
function pagarClicked(){
    alert("Gracias por la compra");
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}
// funcion control del boton agregado al carrito
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
  

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}

//Funcion carrito visible
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';
    var items =document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}
    
// agregagar item carro
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemCarritoContenido = `
    <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
              <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    //actualizamos total del carrito 
    botonSumarCantidad.addEventListener('click',sumarCantidad);
    actualizarTotalCarrito();
}

//escalar en 1 la cantidad del item en el carrito
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}
//resto en 1 la cantidad del item en el carrito 
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}
//eliminacion del item seleccionado del carrito 
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    actualizarTotalCarrito();
    ocultarCarrito();
}
// funcion control de elemenos del carrito de lo contrario se oculta
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}

function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];

        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";

}



 
