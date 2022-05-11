var elementos=[];
var topo=-1;
const MAX=10;

function push(num){
    if (topo<MAX){
        topo = topo + 1;
        elementos[topo]=num;
    }else{
        console.log("Pilha está cheia")
    }
}

function estaVazia(){
    return topo == -1;
}

function pop(){ /*imprimindo o último elemento*/
    if(topo != -1){
        let num = elementos[topo];
        topo = topo -1;
        return num;
    }else{
        console.log("Pilha está vazia")
    }
}

var numDecimal=10;
var resto;

console.log("Empilhando")
while(numDecimal != 0){
    resto=parseInt(numDecimal%2);
    push(resto);
    console.log(resto);
    numDecimal=parseInt(numDecimal/2);
}

console.log("Desempilhando")
while(!estaVazia()){
    console.log(pop());
}

