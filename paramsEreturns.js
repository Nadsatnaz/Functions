function area (largura, altura) {
    const area = largura * altura 
    if (area > 20) {
        console.log (`valor acmia do permitido: ${area}m2`)
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log (area(2))
console.log (area())
console.log (area (2, 3, 4, 5)) // pega os 2 primeiros e ignora os restante
console.log (area(5, 5))