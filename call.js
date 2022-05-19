//call
const pessoa={
    nome: 'Miguel',
}
const animal={
    nome: 'Murphy',
}
function getSomething(){
    console.log(this.nome);
}
getSomething.call(pessoa); //de uma função especificada nos parametros, o metodo call retorna o getSomething this.

//paramtetros no call e apply
const myObj={
    num1: 2,
    num2: 4,
}
function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, 1, 5);
soma.apply(myObj, [1, 5]);

//bind
const retornaNomes=function(){
    return this.nome;
}
let bruno=retornaNomes.bind({nome: 'Bruno'}); //clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro 
bruno();

