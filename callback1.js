const fabricantes = ['mercedes', 'ferrari', 'maclaren']

const imprimir = (nome, indice ) => {
    console.log (`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//cada elemento ele chama o callback e assim até encontrar todos os indices
//a função é passada e ele chama de volta