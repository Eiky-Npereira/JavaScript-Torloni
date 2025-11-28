//1 
function conferirSequencia() {
    
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



}
//2
function descontoNaCompra() {
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
    
}
//3
function MedicaoDeIMC() {
   
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

let imc = peso / (altura * altura);

let classificacao = "";

if (imc < 18.5) {   
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    classificacao = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9) {
    classificacao = "Obesidade grau 1";
} else if (imc >= 35.0 && imc <= 39.9) {
    classificacao = "Obesidade grau 2";
} else {
    classificacao = "Obesidade grau 3";
}

alert(`Seu IMC é: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
 
}
//4
function AprovacaoDeNota() {
   
function calcularMedia() {
   
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota:"));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

  
    alert(`A média do aluno é: ${media.toFixed(2)}`);

    
    if (media >= 7.0) {
        alert("APROVADO");
    } else if (media <7 && media>=5) {
        alert("RECUPERAÇÃO");
    } else {
        alert("REPROVADO");
    }
}


calcularMedia();
 
}
//5
function ConferirDiaDaSemana() {
   
let numeroDoDia;
let diaDaSemana = "Segunda-feira";

let input = prompt("Digite um número de 1 a 7 para saber o dia da semana (1 = Segunda-feira):");

if (input === null || input.trim() === "") {
    console.log("reinicie e digite um número.");
} else 

    numeroDoDia = parseInt(input);

    switch (numeroDoDia) {
        case 1:
            diaDaSemana = "Segunda-feira";
            break;
        case 2:
            diaDaSemana = "Terça-feira";
            break;
        case 3:
            diaDaSemana = "Quarta-feira";
            break;
        case 4:
            diaDaSemana = "Quinta-feira";
            break;
        case 5:
            diaDaSemana = "Sexta-feira";
            break;
        case 6:
            diaDaSemana = "Sábado";
            break;
        case 7:
            diaDaSemana = "Domingo";
            break;
        default:

            diaDaSemana = "digite um número inteiro de 1 a 7.";
            break;
    }

    console.log("Resultado da Verificação de Dia da Semana");
    console.log("Número digitado: " + input);
    console.log("Dia da semana: " + diaDaSemana);
 
}


