//Calculadora de adição dentro do console com verificação se o valor é maior que 10

alert("Digite os números os quais você deseja que sejam somados"); 
var x = prompt("Primeiro número:"); //prompt para receber a primeira variável
var y = prompt("Segundo número:"); //prompt para receber a segunda variável
var z = Number(x) + Number(y); //Cálculo matemático de soma e conversão dos prompts de String para Int
alert("A soma é: "+ z); //Alert com o resultado
if(z > 10) {
    alert("A sua soma é maior que 10");
} else {
    alert("A sua soma é menor que 10");
};
