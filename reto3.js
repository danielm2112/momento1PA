let promedio = (temperatura) => {
    let temperaturaMaxima = Math.max(...temperatura);
    let temperaturaMinima = Math.min(...temperatura);
    let promedio = (temperaturaMaxima + temperaturaMinima) / 2;

    console.log("La tempertura promedio fue de: " + promedio);
}
promedio(temperaturas = [26, 15, 22, 42, 66, 34]);