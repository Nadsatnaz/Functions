// forma literal 

function fun1() {}

// armazenando em uma variável 

const fun2 = function () {}

// armazenamento em um array

const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenamente em um atrubuto de objeto
const obj = {}
obj.falar = function (){return 'função dentro de obj'}
console.log (obj.falar())

// Função como parametro para outra função

function run (fun) {
    fun  ()
}

run (function () {console.log('...executanto')})

// uma função pode retorna/conter outra função

function soma (a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma (2, 3)(4)
const adicao = soma (2, 3)
adicao(4)