// Solicita o valor total da compra
let valor = parseFloat(prompt("Digite o valor total da compra: R$ "));

let desconto = 0;

// Verifica e aplica o desconto
if (valor <= 100) {
    desconto = 0;
} else if (valor <= 200) {
    desconto = 0.10;
} else {
    desconto = 0.20;
}

// Calcula o valor final com desconto
let valorFinal = valor - (valor * desconto);

// Exibe o resultado
console.log("Desconto aplicado: " + (desconto * 100) + "%");
console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));
    