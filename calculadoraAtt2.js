//Calculadora de adição dentro do console com verificação se o valor é maior que 10 e funciona em loop terminado com input "N" em qualquer uma das variáveis
while(true){ // Início do loop
alert("Digite os números os quais você deseja que sejam somados"); 
var x = prompt("Primeiro número:"); //prompt para receber a primeira variável
var y = prompt("Segundo número:"); //prompt para receber a segunda variável
var z = Number(x) + Number(y); //Cálculo matemático de soma e conversão dos prompts de String para Int
if(x == 'N' || y == 'N') { // Condição para parar o loop
    alert("você parou a calculadora");
    break;
}
alert("A soma é: "+ z); //Alert com o resultado
if(z > 10) {
    alert("A sua soma é maior que 10");
} else {
    alert("A sua soma é menor que 10");
};
};
