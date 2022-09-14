//DECLARAR FUNCION
function obtenerNombre(codigo){
    let codigo2 = codigo.split(":")[1]+codigo.split(":")[0]
    return codigo2
}

//LLAMANDO A LA FUNCION
let resultado = obtenerNombre(" 1000190898 :Daniel Mariaca Uribe")
console.log(resultado)