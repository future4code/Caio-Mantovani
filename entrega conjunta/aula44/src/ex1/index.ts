//const minhaString: string = 1
// a) o tipo '1' não pode ser atribuído a uma string

const meuNumero: number = 1
// b) resolvemos declarando da segunte forma: const meuNumero: number | string = 1, "bananinha"



enum Cores {
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    VERMELHO = "vermelho",
    LARANJA = "laranja"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
   
}

const pessoax: pessoa = {
    nome: "x",
    idade: 20,
    corFavorita: Cores.AZUL
}

const pessoay: pessoa = {
    nome: "y",
    idade: 30,
    corFavorita: Cores.VERMELHO
}

const pessoaz: pessoa = {
    nome: "z",
    idade: 40,
    corFavorita: Cores.VERDE
}

let todasPessoas: pessoa[] = [pessoax, pessoay, pessoaz]
console.log(todasPessoas)