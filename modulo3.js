const { descricao, valor, ...outros} = 
{descricao : 'Produto', valor: 100, desconto: 0.1, stock: 50, categgoria: 'Eletrônicos'};

console.log(descricao, valor, outros.stock);