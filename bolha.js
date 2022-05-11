var valores = [8, 7, 6, 5, 4, 3, 2, 1];

function ordenar(){
    let inicio=0;
    let fim=8;
    let tmp;

    for(vezes=0; vezes < 8; vezes++){
        for(pos = inicio; pos < fim - 1 - vezes; pos++){ //jogando o maior valor para o fim. penultimo valor para comparar ele com o seu sucessor
            //vezes -> diminuindo o tamanho do vetor para percorrer menos
            if(valores[pos] > valores[pos + 1]){
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }
}

ordenar();
console.log("vetor ordenado...");
console.log(valores);