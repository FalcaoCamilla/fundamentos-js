

function Name(name, sobrenome){
    this.name = name;

    this.sobrenome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`;
        return nomeCompleto;
    }
}

const milla = new Name("Milla", "Falcão");
const neto = new Name("Neto", "Nascimento");

console.log(milla.sobrenome())