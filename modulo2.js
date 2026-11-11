/** Modulo 2  - Destructing
 * 
 * 
*/

const produto = {nome : "Leite",preco : 1.29, stock:50 };

// Sem destructuring - forma comum
const nome_ = produto.nome;
const preco_ = produto.preco;

//console.log(nome_, preco_);

// Com destructuring   -- Neste caso o nome das variáveis tem de ser igual ao nome das propriedades do objecto
const {nome, preco} = produto;
//console.log(nome,preco);


//renomar variáveis
const {nome: nameProduct, preco: priceProduct} = produto;
//console.log(nameProduct, priceProduct);

// defult values
const {nomex, desconto = 0, categoria = "Geral"} = produto;
//console.log(nome, desconto, categoria);


// Destructuring com arrays


const cores = ["vermelho", "verde", "azul"];


// Com destructuring (posição importa, não o nome)
const [primeira, segunda, terceira] = cores;
//console.log(primeira); // "vermelho"
//console.log(terceira); // "azul"


//saltar elementos com virgula
const [,,ultima] = cores;
//console.log(ultima); // "azul"


//Destructing em parametros de função
const cartaoItem = ({nome, pontos = 0 , ativo = true }) => {
    return nome + " - " + pontos + " pontos";
}

