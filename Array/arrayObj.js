let Tenis = {
    tipo: "Tênis de Corrida",
    cadarco: "M",
    estoque: true,
    tamanho: {
        palmilha: 36,
        tenis: 37,
        caixa: {
            altura: 35,
            largura: 40,
            profundidade: 10
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "Puma"],
    marcaArrayObj: [
        {
            nome: "Nike"
        },
        {
            nome: "Adidas"
        },
        {
            nome: "Puma"
        },
    ],

    getMarcaArrayValores: function (param){
        return this.marcaArrayObj[param];
    },
};

let Loja = {
    arrayLoja: [
        {
            nomeLoja: "Netshoes"
        },
        {
            nomeLoja: "Centauro"
        },
        {
            nomeLoja: "WorldTenis"
        },
    ]
}

console.log(Tenis.tamanho)
let cloneRaso = Object.assign(Tenis.getMarcaArrayValores(0), Loja);
console.log(cloneRaso)

//referências alteradas no clone RASO são alteradas no original também

//clone profundo
let cloneProf = JSON.stringify(Tenis); //transformando em string
cloneProf = JSON.parse(cloneProf); //retransofrmando em obj
//cloneProf = JSON.parse(JSON.stringify(Tenis))
cloneProf.tipo = "Tênis social";
console.log(Tenis.tipo)
console.log(cloneProf.tipo)
