//desafio1-2: Construção e impressão de objetos
//programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'programação',
    endereço: {
        Rua: 'Rua Guilherme Gembala',
        Número: 260,
    }
}

console.log(empresa.cor)
console.log(empresa.endereço)
console.log(empresa.endereço.Rua)
console.log(empresa.endereço.Número)

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.Rua}, ${empresa.endereço.Número}`)