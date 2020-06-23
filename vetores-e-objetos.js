//Desafio1-2: Vetores e Objetos
//programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array
//As tecnologias também devem ser objetos contendo nome e especialidade


const programador = {
    nome: 'Claudia',
    idade:'24',
    tecnologias: [
        { tipo: 'C++', 
        especialidade: 'Desktop' },

        { tipo: 'Python', 
        especialidade: 'Data Science' },

        { tipo: 'JavaScript', 
        especialidade: 'Web/Mobile' }
    ] 
}

console.log(programador.nome)
console.log(programador.tecnologias)
console.log(programador.tecnologias[0].especialidade)

//Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
//O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e 
usa a tecnologia ${programador.tecnologias[0].tipo} 
com especialidade em ${programador.tecnologias[0].especialidade} `)