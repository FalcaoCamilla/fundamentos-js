const userAgent=navigator.userAgent;
let navegador='';
console.log(userAgent.indexOf('Edg'));
console.log(userAgent);
if (userAgent.indexOf('Edg') > -1){
    navegador='Edge';
} else if (userAgent.indexOf('Chrome') > -1){
    navegador='Chrome';
} else{
    navegador="outro";
}
console.log(navegador)