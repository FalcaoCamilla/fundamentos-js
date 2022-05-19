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
    switch(id){ //switch(variavel que recebe valor)
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

//while
var achou = false;
var numeroSorteado=10;
var possivelNumero=0;

while(!achou){
    possivelNumero+=1;
    if(numeroSorteado === possivelNumero){
        achou=true;
    }else{
        console.log('Possível número não corresponde ao sorteado ' + possivelNumero);
    }
}