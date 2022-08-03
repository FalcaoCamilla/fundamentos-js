//function
function nomeFunc(){
    return "Hello World"
}

const helloWorld1 = function(){
    return "Hello World";
}

//arrow function
const helloWorld2 = () => { //const para indicar o nome, parênteses para indicar função, arrow para indicar o comportamento
    return "Hello World"
}

const helloWorld3 = () => "Hello World" //arrow para indicar o retorno direto

const nomeFuncArrowArguments = () => arguments //arrow functions não retorna arguments



//arrow function não faz hoisting, é preciso declarar ela antes

