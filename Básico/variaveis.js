var a = 1; //redeclarar, reatribuir, hoisting
let b = 2; //reatribuir

if (a===1){
    let b = 2;
    var a = 11; 
    b = 22; 

    console.log(a); //escopo global
    console.log(b); //escopo de bloco
}

console.log(a);
console.log(b);

//FIRST_NAME = "Malu" --> não pode fazer hoisting
const FIRST_NAME = "Camilla"; //não pode reatribuir nem redeclarar valores

let exemplo = new String("blablabla");
console.log(typeof exemplo);
console.log(exemplo);