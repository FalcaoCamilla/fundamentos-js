let array = [1,2,3,4,5,6,7,8,9,73];

for(let i=0;i<array.length;i++){ if(verificaPrimo(array[i])) //i enquanto variável controladora
console.log(array[i]);
}

function verificaPrimo(n) { for (let i = 2; i < n; i++)
    if (n / i == 0) return false; return true;
    }