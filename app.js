alert('Boas vindas ao jogos do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entra 1 e 10');

//se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}!`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}