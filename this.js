function calculaIdade(anos){
    return `Daqui a ${anos}, ${this.nome} terá ${
        this.idade + anos
    } anos de idade`
}

const pessoa1={
    nome: "Maria",
    idade: 30
}

const pessoa2={
    nome: "Carla",
    idade: 26,
}

console.log(calculaIdade.call(pessoa2, 30))