const Tenis = {
    tamanho: 37,
    estoque: true,
    marcas: [
        {nome: "Nike"},
        {nome: "Adidas"}
    ],
    secret: 123456,
    n: 5
};

//const {tamanho, estoque, marcas = "Não possui marca"} = Tenis;

const {secret: randomNumber, n: avaliacoes} = Tenis;

//console.log(tamanho, estoque, marcas)
console.log(randomNumber)
console.log(avaliacoes)