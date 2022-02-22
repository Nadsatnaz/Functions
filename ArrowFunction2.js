Pessoa (() => {
    this.idade = 0
    
    const self = this
    setInterval (() => {
        this.idade++
        console.log()
    })
})

new Pessoa 