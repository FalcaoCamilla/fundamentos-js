const mySet = new Set();
mySet.add(1);
mySet.add(5);

mySet.has(1); //verifica item

mySet.delete(5);

function getAdmins(map){
    let admins=[];
    for([key, value] of map){
        if(value==='Admin'){
            admins.push(key);        
        }
    }
    return admins;
}
const usuarios = new Map();
usuarios.set('Luiz', 'User')
usuarios.set('Camilla', 'Admin')
usuarios.set('Neto', 'Admin')

console.log(getAdmins(usuarios));


const meuArray = [10, 10, 20, 30, 5, 5, 12]
function valoresUnicos(arr){
    const mySet = new Set(arr);

    return[...mySet];
}
console.log(valoresUnicos(meuArray))