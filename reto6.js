//Declarar la funcion
function crearAprendiz(nombre, planeta, edad, estatura, clasificarAprendiz){
    let datosAprendiz = {
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura:estatura
    }
    clasificarAprendiz(datosAprendiz)
}

//Llamando la funcion
crearAprendiz('Danie','Tierra',10,1.72,function(aprendiz){
    if(aprendiz.edad>=15){
        console.log("Usted se va para la clase sable de luz ")
    }else{
        console.log("Usted no se va para la clase de sable de luz")
    }
})