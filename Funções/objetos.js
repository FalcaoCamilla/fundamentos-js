let person = {
    name: 'Camilla', //name --> key | camilla --> valor
    age: 19,
    adress: 'Parnamirim'
};

person["numerOfSiblings"]=2;

person["mom"] = "Dani";

person.bf = "Neto";

console.log(person)

const lanches = {
    cardapio: [
        {nome: "x-bacon", preco: "R$ 9,00"},
        {nome: "x-salada", preco: "R$ 7,50"}
    ],

    meuPedido: function (pedido){
        return console.log(this.cardapio[pedido]);
    },

    //arrow function não funciona da mesma forma, pois ele não recebe um valor declarado antes dele

    meuPedidoArrow: (pedido) => {
        this.cardapio = [ //declarando o this no mesmo escopo da arrow
            {nome: "x-bacon", preco: "R$ 9,00"},
            {nome: "x-salada", preco: "R$ 7,50"}
        ];

        return console.log(this.cardapio[pedido])
    }
};

lanches.meuPedido(0)
lanches.meuPedidoArrow(0)