// ============================================
// EXERCÍCIO — Spread e Rest
// Corre com: node teste.js
// ============================================

const estadoInicial = {
  titular: "Luis Peixoto",
  pontos: 3750,
  nivel: "gold",
  cartoes: ["Continente", "Wells"],
  preferencias: { notificacoes: true, newsletter: false },
};

// TODO 1: Cria uma cópia do estadoInicial chamada 'novoEstado'
// e actualiza os pontos para 4200, sem mutar o original.
// (padrão React de imutabilidade)
const novoEstado = { ...estadoInicial, pontos: 4200 };

// TODO 2: Adiciona "Bom Bocado" ao array de cartoes
// sem mutar estadoInicial.cartoes
// const cartaoActualizado = ...
const cartaoActualizado = [...estadoInicial.cartoes, "Bom Bocado"];

// TODO 3: Usa rest destructuring para extrair 'titular' e 'pontos'
// e agrupar o resto numa variável 'detalhes'
// const { titular, pontos, ...detalhes } = ...titular
const {titular, pontos, ...detalhes} = estadoInicial;

// TODO 4: Cria uma função 'criarCartao' que aceita
// um objecto base e quaisquer propriedades extra para sobrescrever.
// Exemplo: criarCartao(estadoInicial, { nivel: "platinum", pontos: 0 })
// deve devolver um novo objecto com nivel e pontos actualizados
// const criarCartao = (base, extras) => ...
const criarCartao = (base, extras) => ({ ...base, ...extras });


// TODO 5: Cria uma função 'somarPontos' que aceita
// um número qualquer de valores e os soma todos
// const somarPontos = (...valores) => ...
const somarPontos = (...valores) => {
    return valores.reduce((total, valor) => total + valor, 0);
};

// ---- TESTES ----
console.log("=== Teste 1 — Imutabilidade ===");
console.log("Novo:", novoEstado.pontos);        // 4200
console.log("Original:", estadoInicial.pontos); // 3750 (intacto!)


console.log("\n=== Teste 2 — Array sem mutação ===");
console.log(cartaoActualizado);
// ["Continente", "Wells", "Bom Bocado"]
console.log(estadoInicial.cartoes);
// ["Continente", "Wells"] (intacto!)


console.log("\n=== Teste 3 — Rest destructuring ===");
console.log(titular); // Luis Peixoto
console.log(pontos);  // 3750
console.log(detalhes);
// { nivel: "gold", cartoes: [...], preferencias: {...} }

console.log("\n=== Teste 4 — criarCartao ===");
const cartaoPlatinum = criarCartao(estadoInicial, { nivel: "platinum", pontos: 0 });
console.log(cartaoPlatinum.nivel);   // platinum
console.log(cartaoPlatinum.titular); // Luis Peixoto (mantido do base)
console.log(estadoInicial.nivel);    // gold (original intacto)

console.log("\n=== Teste 5 — somarPontos ===");
console.log(somarPontos(100, 200, 50));        // 350
console.log(somarPontos(1000, 2000, 500, 250)); // 3750

