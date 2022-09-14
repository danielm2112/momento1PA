let sableEnergia=[-2, -17, 32, 52, -82]

let filtro = sableEnergia.filter(function(sable){
    return sable <=0
})
console.log(`Los sables de energia negativa son `,filtro)