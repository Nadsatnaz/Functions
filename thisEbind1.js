// this pode variar de acordo com a forma que a func está sendo chamada
const pessoa = {
    saudacao: 'bom dia',
    falar () {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar // armazenando a função em uma variavel
falar() //gera undefined pois está em um outro contexto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // bind é um metodo que amarra o objeto para ser o dono da execução

//tudo é uma questão de onde o this está apontando