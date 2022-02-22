const valor = 'global'

function fun1(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    fun1()
}

exec()