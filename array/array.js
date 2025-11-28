let frutas = ["maçã" , "Morango" , "Melancia", "Uva" , "Pera"];

console.log("A lista de fruta tem " + frutas.length + " itens.");

console.log("A primeira fruta é a :" + frutas [0]);

console.log("O item 4 da minha lista é:" + frutas [3]);

console.log(frutas);

for(let i =0; i <= frutas.length; i++){
    console.log(frutas[i])
}


// Crie uma lista de tarefas, contendo no max 10 itens
// E exiba cada tarefas


let tarefasMecardo = ["Arroz", "Feijão", "pão"];


console.log("A lista de tarefa do mercado tem" + tarefasMecardo.length + "itens.");

tarefasMecardo.forEach((frutas)=> { 
    console.log(frutas)
})

