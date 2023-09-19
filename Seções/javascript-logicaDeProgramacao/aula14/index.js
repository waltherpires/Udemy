//IEEE 754-2008
let num1 = 0.7 ; //number
let num2 = 0.1; //number 

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0

num1 = parseFloat(num1.toFixed(2)); //Corige o valor
//num1 = num1.toFixed(2) -> Dá a falsa sensação de que corrigiu
console.log(num1);
console.log(Number.isInteger(num1));
//console.log(num1.toString() + num2); 
//num1 = num1.toString -> trasnforma num1 em string (de forma duradoura)
//console.log(num1.toString(2)) -> mostra o número em valor binário
//console.log(num1.toFixed(2)); 
//console.log(Number.isInteger(num1));
let temp = num1 * 'ola';