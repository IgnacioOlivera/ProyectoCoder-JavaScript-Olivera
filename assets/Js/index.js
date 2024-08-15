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

class Alquiler {
      constructor(id,nombre,precio,categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

}

const alquileres =[ 
    new Alquiler (1,"Departamento" ,"USD" +100,"Airbnb"),
    new Alquiler (2,"Habitacion de hotel","USD" +200,"hoteles"),
    new Alquiler (3,"Casa" , "USD" +250, "Casas"),
    new Alquiler (4,"Cabaña","USD" +50,"Camping"),
]



const alquilarViajes = () =>{
    let interaccion = '';

    do {
        let tipoAlquiler =  prompt(generarMenuAlquileres());
        let alquiler = validarAlquilerUsuario(tipoAlquiler);

        if(alquiler){
            alert(`El tipo de alquiler es: ${alquiler.nombre}`)
        }else{
            alert(`El hospedaje ingresado no es correcto`)
            continue

        }

        interaccion = prompt("quieres reservar otro hospedaje? (SI - NO)");

    }while(interaccion.toLowerCase() != "no");
  


}
const generarMenuAlquileres = () =>{
    let menu = "Estos alquileres estan disponibles\n\n"
    alquileres.forEach(alquiler =>{
        menu+= `* ${alquiler.nombre} - ${alquiler.precio}\n`
    });
    menu+=`\n Ingrese el tipo de alojamiento que desea alquilar.`
    return menu;

}
const validarAlquilerUsuario = (nombre) =>{
    return alquileres.find(alquiler => alquiler.nombre.toLowerCase() === nombre.toLowerCase());

}


alert("Bienvenidos a ViajesDeVerano")

let usuario = parseInt(prompt(` Eliga el numero de lo que desea realizar 

    1 - Alquilar un alojamiento para su viaje.
    2 - Consultar cupones o descuentos. 
    3 - Salir del Sitio`));

while(usuario !=3){

    switch(usuario){
        case 1:
            alert(`consultando alojamientos disponibles hoy`);
            alquilarViajes();
            break;
        case 2:
            alert(`consultando promociones y cupones de descuento`);
            alert(`No hay disponible ningun descuento de temporada aun!`);
            break;
        default:
            alert(`Asegurate de escribir correctamente una de las opciones`);    
    }
    usuario = parseInt(prompt(` Eliga el numero de lo que desea realizar 
        1 - alquilar un alojamiento para su viaje.
        2 - consultar cupones o descuentos. 
        3 - Salir del Sitio`));   
}
alert(`Gracias por confiarnos tus viajes`)