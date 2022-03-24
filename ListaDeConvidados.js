var convidado = [];

while(true){
var nome = prompt("Digite o nome do convidado:");
var idade = Number(prompt("Digite a idade do seu convidado:"));
var cpf = prompt("Digite o CPF do seu convidado:");
convidado.push({nome: nome, idade: idade, CPF: cpf});
var resp = prompt("Quer parar?");
if(resp == "s" || resp == "S"){
    break;
}
}

console.log(convidado);