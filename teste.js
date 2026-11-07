function somar(a, b) {
    return a + b;   
}

console.log(somar(2, 3)); // Output: 5

//Arrow Function 
const somar2 = (a, b) => a + b;

console.log(somar2(5, 3)); // Output: 8

const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // Output: 5


const dividirWithCheck = (a, b) => {
    if (b === 0) {
        return 'Erro: Divisão por zero não é permitida.';
    }
    return a / b;
};
console.log(dividirWithCheck(10, 2)); // Output: 5
console.log(dividirWithCheck(10, 0)); // Output: Erro: Divisão por zero não é permitida.

const calcYearOfBirth = (age) => {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
}

const myfunction = (Name , Age) => {
    return `Olá, ${Name}! tem ${Age} anos.` + ` Você nasceu em ${calcYearOfBirth(Age)}.`;   
};
console.log(myfunction("Alice", 25)); // Output: Olá, Alice! Você tem 25 anos.


//  Problema com função tradicional
const utilizador = {
  nome: "Luis",
  saudar: function() {
    setTimeout(function() {
      //  'this' aqui é undefined (ou window no browser)
      console.log("Olá, " + this.nome);
    }, 10);
  }
};

//  Solução com arrow function
const utilizador2 = {
  nome: "Luis",
  saudar: function() {
    setTimeout(() => {
      //  'this' herda do saudar(), ou seja, é o objecto utilizador
      console.log("Olá, " + this.nome); // "Olá, Luis"
    }, 10);
  }
};