/* CONFIRMACION DE EDAD */
var edad = window.prompt("ingrese su edad")


if (edad > 17){ 
    console.log("Bienvenido a la Casa de Cambio $$$!")
}
else{ console.log("Acceso denegado por incumplimiento de politicas.")

}

/*Casa de cambio - Conversor de dinero para peso Uruguayo.*/

let libra = 52;
let euro = 43;
let dolar = 40;
let real = 8;
let yen = 1;


let moneda = prompt("introduce un tipo de cambio que quieras convertir!")

function convertir(cantidad, moneda){
    
    
    if( moneda == libra ){ 
        return ("£" +" "+ (cantidad=prompt("introduce un monto")) / libra)
    }
    if( moneda == euro ){
        return ("€" +" "+ (cantidad=prompt("introduce un monto")) / euro)
     }
     
    if(  moneda == dolar){
        return ("USD" +" "+ (cantidad=prompt("introduce un monto")) / dolar)
     }
     
    if(  moneda == real ){
        return ("R$" +" "+ (cantidad=prompt("introduce un monto")) / real)
     }
     
    if( moneda == yen ){
        return ("¥" +" "+ (cantidad=prompt("introduce un monto")) / yen)
     }

    else{ 
        return "No existe ese tipo de cambio "
    }
    
   
}
console.log(convertir(4000, dolar))

