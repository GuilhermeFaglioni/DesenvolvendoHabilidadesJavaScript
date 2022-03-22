var nums = [];
var sum = 0;
var result = 0;
var i = 0;
alert("Essa calculadora só para quando for digitado N ou N");
while(true){
    var n = prompt("Digite o número a ser inserido: ");
    if(n == 'N' || n == 'n'){
        break;
    }
    nums.push(Number(n));
};

for(i = 0; i < nums.length; i++){
    sum += nums[i];
}
result = sum/nums.length;

console.log(result);