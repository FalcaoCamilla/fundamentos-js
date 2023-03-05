//definir no parâmetro o valor padrão, caso ele não seja informado posteriormente

function exponencial(array, num = 1){
    const result=[];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }
    return result;
}

const resultExp=exponencial([1, 2, 3, 4], 2)
console.log(resultExp)

//verificar array com todos os argumentos passados quando a função foi invocada

function findMax(){
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++){
        if (arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

const resultMax=findMax(1, 2, -1);
console.log(resultMax);

function findMin(){
    let min = Infinity;

    for (let i = 0; i < arguments.length; i++){
        if (arguments[i]<min){
            min = arguments[i];
        }
    }
    return min;
}

const resultMin=findMin(1, 2, -1);
console.log(resultMin);
//caso o  usar SPREAD
