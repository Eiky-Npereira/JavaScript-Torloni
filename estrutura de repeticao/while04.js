let idade = parseInt(prompt("Digite sua idade:"));

while (idade < 18) {
    idade = parseInt(prompt("Idade inválida! Você precisa ter 18 anos ou mais. Digite novamente:"));
}

console.log("Acesso liberado! Você tem " + idade + " anos.");
