// arrow func sempre sao anonimas 

let dobro = function (a){
    return 2 * a
}

dobro  = (a) => {
    return 2 * a
}

dobro = a => 2 * a //quando só há 1 argumento 
console.log(dobro(5))

ola = _ => 'olá' // possui um paramentro
console.log(ola())