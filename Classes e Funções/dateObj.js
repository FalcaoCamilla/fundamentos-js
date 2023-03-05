let data = new Date();
const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
console.log(`Olá, hoje é ${dias[data.getDay()]}, ${data.getHours()}h${data.getMinutes()}`);
