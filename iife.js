//()()
(function (num1, num2){
    console.log("Função auto invocada")
    const soma = num1 + num2;
    console.log(soma);
})(1, 2);

(() => {
    var teste = "teste1";
    console.log(teste)
})();
//escopo local
(() => {
    var teste = "teste2";
    console.log(teste)
})();

