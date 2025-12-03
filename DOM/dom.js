//dom é a árvore/fluxo do meu documento HTML
//Ele serve para que o JS consiga manipular(visualzar, editar, criar e excluir)
//O DOM ele torna os elementos HTMl em objetos para que o JS consiga acessar de fato 

let elementobody = document.getElementsByTagName("Body")

console.log(elementobody);

//acessar pela tag h1 


let elementoH1 = document.getElementsByTagName("h1");


//acessando o elemento pela sua posição//

// console.log(elementoH1[0].textContent = "Messi é o pior ");


let LeandraElemento = document.getElementById("tecnica")

console.log(LeandraElemento)


let JogadoresTorloni = document.getElementsByClassName("jogador")

console.log(JogadoresTorloni)

let ElementosJogadores = document.getElementsByClassName("jogador")

console.log(ElementosJogadores[3])

let MudancaDeJogador = document.getElementsByClassName("jogador")

console.log(MudancaDeJogador[3].textContent ="Leandra")