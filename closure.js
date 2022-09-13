function QualSeuNome(nome){
    const msg = `O seu nome é: `

    function SeuNome(){
        return `${msg} ${nome}`;
    }
    return SeuNome();
}

console.log(QualSeuNome("Camilla")) 