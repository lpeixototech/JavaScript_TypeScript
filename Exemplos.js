// ============================================
// EXERCÍCIO — Arrow Functions
// Corre com: node Exemplos.js
// ============================================

const utilizadores = [
  { nome: "ana", pontos: 150 },
  { nome: "rui", pontos: 80 },
  { nome: "maria", pontos: 200 },
];

// TODO 1: Reescreve esta função como arrow function
// Deve devolver um array com os nomes em maiúsculas
function getNomesEmMaiusculas(lista) {
  return lista.map(function(u) {
    return u.nome.toUpperCase();
  });
}

const getNomesEmMaiusculasArrow = (lista) => lista.map( function(u){return u.nome.toUpperCase();} );

// TODO 2: Cria uma arrow function chamada 'getUtilizadoresActivos'
// que filtra apenas utilizadores com pontos > 100
// (usa .filter())
// const getUtilizadoresActivos = ...

const getUtilizadoresActivos = (lista) => {
    return lista.filter(function(u) {
        return u.pontos > 100;
    });
};


// TODO 3: Cria uma arrow function chamada 'getTotalPontos'
// que soma todos os pontos da lista
// (usa .reduce())
// const getTotalPontos = ...

const getTotalPontos = (lista) => {
    return lista.reduce(function(soma, u) {
        return soma + u.pontos;
    }, 0);
};


// ---- NÃO ALTERES ABAIXO DESTA LINHA ----
// (são os testes que validam o teu código)

console.log("=== Teste 1 — Nomes em maiúsculas ===");
const nomes = getNomesEmMaiusculas(utilizadores);
console.log(nomes);
// Esperado: [ 'ANA', 'RUI', 'MARIA' ]

console.log("\n=== Teste 2 — Utilizadores activos (pontos > 100) ===");
const activos = getUtilizadoresActivos(utilizadores);
console.log(activos);
// Esperado: [ { nome: 'ana', pontos: 150 }, { nome: 'maria', pontos: 200 } ]

console.log("\n=== Teste 3 — Total de pontos ===");
const total = getTotalPontos(utilizadores);
console.log(total);
// Esperado: 430


const getNomesEmMaiusculas2 = (lista) => lista.map(u => u.nome.toUpperCase());

const getUtilizadoresActivos2 = (lista) => lista.filter(u => u.pontos > 100);

const getTotalPontos2 = (lista) => lista.reduce((soma, u) => soma + u.pontos, 0);