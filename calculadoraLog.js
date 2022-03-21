alert("Essa calculadora calcula o log de X valores determinado pelo usuário \n Insira o valor inicial, o valor final e de quanto em quanto deve ser incrementado.")
var vi = Number(prompt("Valor inicial: "));
var vf = Number(prompt("Valor final: "));
var vc = Number(prompt("Valor de incremento:"));
var res = 0;
var x = 0

for(x = vi; x <= vf; x += vc ) { //Loop de cálculo do logarítimo
   res = Math.log(x);
    console.log(res);
}
