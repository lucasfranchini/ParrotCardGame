let numero_cartas =6;
const deck = document.querySelector(".campo");
while(numero_cartas<4 || numero_cartas>14 || numero_cartas%2 === 1){
    numero_cartas = parseInt(prompt("com quantas cartas você quer jogar"));
}
for (let i=0;i<numero_cartas;i++){
    deck.innerHTML = `${deck.innerHTML}  
    <div class="carta" onclick="virar(${i})">
    <img src="imagens/front.png" alt="um papagaio" class="frente">
    <img src="imagens/bobrossparrot.gif" alt="um papagaio de afro">
    </div>`
}
const cartas = document.querySelectorAll(".campo .carta");
function virar(i){
    cartas[i].querySelectorAll("img")[0].classList.toggle("frente");
    cartas[i].querySelectorAll("img")[1].classList.toggle("frente");
}