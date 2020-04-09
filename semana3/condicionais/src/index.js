/*
Ex 1 - Testa se o numero é par.

Ex 2 - 
a) Apresentar o preço dos produtos cadastrados.

b) O preço da fruta maçã é R$ 2,25

c) 24,55

d) O preço da fruta  Pêra  é  R$  5

Ex 3 - O console esta fora do bloco pai, logo nada sera exibido.
*/

//Ex 4 - a)


const n1 = prompt("Digite o primeiro número")
const n2 = prompt("Digite o segundo número")

if(n1 > n2){
	console.log(n1, n2)
} else {
	console.log(n2, n1)
}

//O que acontece com o seu programa se os 2 números forem iguais? 
//Os dois aparecem normalmente

//Ex 4 - b)

let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")
let n3 = prompt("Digite o terceiro número")

var numeros = (n1, n2, n3)

switch(numeros) {
    case(n1 > n2 > n3):
        console.log("n1, n2, n3")
        break;
    
    case (n1 > n3 > n2):
        console.log("n1, n3, n2")
        break;

    case (n2 > n1 > n3):
        console.log("n2, n1, n3")
        break

    case ("n2 > n3 > n1"):
        console.log("n2, n3, n1")
        break

    case (n3 > n1 > n2):
        console.log("n3, n1, n2")
        break

    case (n3 > n2 > n1):
    	console.log("n3, n2, n1")
    	break
    	default:
    	console.log("Erro")
}

// nao esta funcionando, continuarei trabalhando nisso após horario da entrega