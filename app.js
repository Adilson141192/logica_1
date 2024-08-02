alert('Boas vindas ao jogos do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entra 1 e 10');

//se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert('Isso aí! Você descobriu o número secreto!');
} else {
    alert('Você errou!')
}