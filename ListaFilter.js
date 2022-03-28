Array.prototype.groupBy = function(prop) {
    var value = this.reduce(function(total, item) {
    var key = item[prop];
    total[key] = (total[key] || []).concat(item);
    return total;
    }, {});
    return value;
   }
   
var convidados = [
    {nome: 'Felipe', idade: 37, genero: 'masculino'},
    {nome: 'Amanda', idade: 17, genero: 'feminino'},
    {nome: 'João', idade: 27, genero: 'masculino'},
    {nome: 'Daniel', idade: 21, genero: 'masculino'},
    {nome: 'Helena', idade: 21, genero: 'feminino'}
];

convidadosF = convidados.sort(function(a, b){
    return (a.nome > b.nome);
}).filter(function isMaior(item){
    return item.idade >= 18;
}).groupBy('genero')

console.log(convidadosF);

