// Esse .js na verdade é um compilado de listas de convidados que integram as funções básicas do JS para arrays
// Para testar cada caso cole só o caso que quiser no console.

// caso 1
var n1 = [];
var QC = prompt("Digite o número de convidados: ")
for(i = 0; i < QC; i++){
    n1[i] = prompt("Qual o nome do convidado: ")
};

console.log(n1);

// caso 2
var n2 = ["João", "Ana", "Marcos", "Caio"];
console.log(n2);
n2.pop();// tira o último valor do array
n2.push("Gabriel");// adiciona na ultima posição
console.log(n2);

// caso 3
var n3 = ["João", "Ana", "Marcos", "Caio"]; 

for(i = 0; i < n3.length; i++){ //Usado para medir o array e criar condições
    console.log(n3[i]);
}

// caso 4
var n4 = ["João", "Ana", "Marcos", "Caio"]; 

n4.forEach(function(n, i){ //forEach cria a possibilidade de fazer caso a caso em loop sem um for
    console.log(i + " - " + n);
})

// caso 5
var n5 = ["João", "Ana", "Marcos", "Caio"]; 
console.log(n5);
n5.shift(); // adiciona ao final do array
n5.unshift("davi"); // adiciona ao início do array
console.log(n5);

// caso 6
var n6 = ["João", "Ana", "Marcos", "Caio"];
n6.splice(1, 2, "zezinho", "fulano"); //Splice remove e adiciona na lista, primeiro valor é o índice 
console.log(n6); //contador de quantos serão removidos, os valores a serem adicionados nas posições indicadas
