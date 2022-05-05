
let array = [];
array.push(3); //adicionar
array.push(2, 1);
console.log(array);
array.pop(); //remover o último
array.shift(); //remover o primeiro
array.unshift(3); //adiciona no começo
array.includes(4); //verificar item
array.every(item => item === 5); //todos os itens do array são iguais a 5. retorna false
array.some(item => item === 3); //algum item do array é 3. retorna true
console.log(array.indexOf(2)); //achar o índice do elemento