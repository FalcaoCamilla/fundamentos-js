//solução 1

function verificaPalindromo(string){
    if(!string) return "string inexistente"; //se for diferente de null ou undefined, retorna

    return string.split("").reverse().join("") === string;
    //split separa toda a string em um array
}

console.log(verificaPalindromo("gato"));

//solução 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++){ //adicionando 1 a cada vez em que o índice 0 for menor do que o tamanho da string
        //length dividido por 2, porque a cada laço do loop, haverá a verificação dupla, como a última letra ser igual a primeira e assim sucessivamente
        if(string[i] !== string[length - 1 - i]){
            return false;
        }
        //os colchetes servem para acessar o caracter, e não o índice
        //length começa do 1, enquanto o índice começa do 0
        //abba
        //0123
        //i = 1, string.length - 1 = 3, string.length - 1 - i = 2   
    } 
    return true;
}
console.log(verificaPalindromo2("abba"));