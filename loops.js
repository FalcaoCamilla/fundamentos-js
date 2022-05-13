function numeroPositivo(num){
    let resultado;

    if (num<0){
        resultado = false;
    }else{
        resultado = true;
    }
    return resultado;
}

numeroPositivo(2);

function numPositivo(num){
    const ehNegativo = num < 0;

    if(ehNegativo){
        return false;
    }
    return true;
}

function numerPositivo(num){
    const Negativo=num<0;
    const maiorQueDez=num>10;

    if(Negativo){
        return "Esse número é negativo";
    } else if(!Negativo && maiorQueDez){
        return "Esse número é positivo e maior que 10!"
    }
    return "Esse número é positivo!";
}

//SWITCH

function getAnimal(id){
    switch(id){
        case 1:
            return"cão";
        case 2:
            return"gato";
        case 3:
            return"pássaro";
        default: //sempre precisa de um valor default, pois será o return para respostas inesperadas
            return "peixe";
    }
}

// for...in --> estruturas inumeráveis
function forInExemplo(obj){
    for(prop in obj){
        console.log(prop);
        //console.log(obj[prop])
    }
}
const meuObj={
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObj);

//for...of --> estruturas iteráveis
function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}
const palavra="abacaxi";
logLetras(palavra)

//while
function exWhile(){
    let num=0

    while(num<=5){
        console.log(num);
        num++;
    }
}
exWhile()

//while...do
function exDoWhile(){
    let num=0;

    do{
        console.log(num);
        num++;
    }while(num<=5)
}

exDoWhile()