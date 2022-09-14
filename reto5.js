const salarioMensual = (licenciasVendidas = 0) => {
    const salario = (3500000 + 1500000*licenciasVendidas)*0.95
    console.log(salario)
    return salario
 }
 
 salarioMensual()