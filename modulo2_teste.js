// ============================================
// EXERCÍCIO — Destructuring
// Corre com: node teste.js
// ============================================

const respostaAPI = {
  status_: 200,
  mensagem: "OK",
  dados: {
    cartao: {
      numero: "CC-12345",
      titular: "Luis Peixoto",
      pontos: 3750,
      nivel: "gold",
    },
    transaccoes: ["Continente", "Wells", "Bom Bocado"],
  },
};

// TODO 1: Extrai 'status' e 'mensagem' do objecto raiz
// const { ... } = respostaAPI;
const {status_, mensagem} = respostaAPI;


// TODO 2: Extrai 'titular' e 'pontos' do objecto cartao
// (tenta numa única linha, sem aceder a respostaAPI.dados.cartao)
const {dados: {cartao: {titular, pontos}}} = respostaAPI;


// TODO 3: Extrai 'nivel' mas renomeia-o para 'nivelCartao'
const {nivel : nivelCartao} = respostaAPI.dados.cartao;

// TODO 4: Extrai a primeira e a terceira transacção do array
// (usa destructuring de array com vírgula para saltar a segunda)
const {transaccoes: [primeiraLoja, , terceiraLoja]} = respostaAPI.dados;

// TODO 5: Cria uma arrow function 'resumoCartao' que recebe
// o objecto 'cartao' e devolve a string:
// "Luis Peixoto (gold): 3750 pontos"
// Usa destructuring directamente nos parâmetros da função.
// const resumoCartao = ({ ... }) => ...


const resumoCartao = ({titular, nivel, pontos}) => {
    return `${titular} (${nivel}): ${pontos} pontos`;
}

// ---- TESTES ----
console.log("=== Teste 1 ===");
console.log(status_, mensagem);
// Esperado: 200 OK

console.log("\n=== Teste 2 ===");
console.log(titular, pontos);
// Esperado: Luis Peixoto 3750

console.log("\n=== Teste 3 ===");
console.log(nivelCartao);
// Esperado: gold

console.log("\n=== Teste 4 ===");
console.log(primeiraLoja, terceiraLoja);
// Esperado: Continente Bom Bocado

console.log("\n=== Teste 5 ===");
console.log(resumoCartao(respostaAPI.dados.cartao));
// Esperado: Luis Peixoto (gold): 3750 pontos