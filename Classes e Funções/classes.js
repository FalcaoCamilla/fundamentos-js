class Matematica{
    soma(num1, num2){
        return num1 + num2;
    }
    subtracao(num1, num2){
        return num1 - num2;
    }
}

var instanciaMatematica = new Matematica
var resultado=instanciaMatematica.soma(4,7)

console.log(resultado)