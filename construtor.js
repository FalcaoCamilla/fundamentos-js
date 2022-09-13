function Name(name){
    this.name=name;
}

const hugo = new Name("Gu");
const camilla = new Name("Mi");

console.log(hugo.name);
console.log(camilla.name)

function Calculadora(){
    this.soma = (num1, num2) => {
        return `${num1 + num2}`;
    };

    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`;
    };
}

const calculadora = new Calculadora();

console.log(calculadora.soma(1,2));
console.log(calculadora.subtracao(2,1));
