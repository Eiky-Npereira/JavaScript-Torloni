
// let num1 = parseFloat(prompt("Digite o primeiro número:"));
// let num2 = parseFloat(prompt("Digite o segundo número:"));
// let num3 = parseFloat(prompt("Digite o terceiro número:"));


// if (num1 < num2 && num2 < num3) {
//     alert("Os números estão em ordem crescente.");
// } else {
//     alert("Os números não estão em ordem crescente.");
// }

// --------------------------------------Desafio da Alexia-----------------------------------


let primeiroNumero = parseInt(prompt("Digite o Primeiro número"));
let SegundoNumero = parseInt(prompt("Digite o Segundo número"));
let TerceiroNumero = parseInt(prompt("Digite o Terceiro número"));


if (TerceiroNumero < SegundoNumero && SegundoNumero < TerceiroNumero) {
    alert ("Os números estão em ordem decrescente.");

}

if (primeiroNumero < SegundoNumero && SegundoNumero < TerceiroNumero) {

    alert ("Está em ordem crescente.");
}

else if(primeiroNumero < SegundoNumero && SegundoNumero >= TerceiroNumero) 
    alert ("Os números estão em ordem aleatoria.");


