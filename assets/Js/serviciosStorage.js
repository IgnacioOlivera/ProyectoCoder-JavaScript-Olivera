//*  Storage & JSON *//

function guardarReserva(producto){ 
    const data = JSON.parse(localStorage.getItem("bicicletas"))|| [];
    console.log(data);
    if(!data){
        const nuevoProducto= producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("alquileres",JSON.stringify([nuevoProducto]));
    }else{
        const indiceProducto = data.findIndex(alquiler => alquiler.id === alquiler.id);
        console.log(indiceProducto)
        const nuevaData = data;
     if (indiceProducto === -1) { 
        nuevaData.push(obtenerNuevoProductoParaData(producto))
      }else{
        nuevaData[indiceProducto].cantidad ++;
      }
      localStorage.setItem("alquileres",JSON.stringify(nuevaData))
    }
}

function obtenerNuevoProductoParaData(producto){
    const nuevoProducto = producto
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}