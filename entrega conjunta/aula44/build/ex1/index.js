const meuNumero = 1;
var Cores;
(function (Cores) {
    Cores["AZUL"] = "azul";
    Cores["VERDE"] = "verde";
    Cores["AMARELO"] = "amarelo";
    Cores["VERMELHO"] = "vermelho";
    Cores["LARANJA"] = "laranja";
})(Cores || (Cores = {}));
const pessoax = {
    nome: "x",
    idade: 20,
    corFavorita: Cores.AZUL
};
const pessoay = {
    nome: "y",
    idade: 30,
    corFavorita: Cores.VERMELHO
};
const pessoaz = {
    nome: "z",
    idade: 40,
    corFavorita: Cores.VERDE
};
let todasPessoas = [pessoax, pessoay, pessoaz];
console.log(todasPessoas);
//# sourceMappingURL=index.js.map