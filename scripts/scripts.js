let numero_cartas =0;
const deck = document.querySelector(".campo");
while(numero_cartas<4 || numero_cartas>14 || numero_cartas%2 === 1){
    numero_cartas = parseInt(prompt("com quantas cartas você quer jogar"));
}
for (let i=0;i<numero_cartas;i++){
    deck.innerHTML = `${deck.innerHTML}  
    <div class="carta">
    <img src="imagens/front.png" alt="um papagaio" class="frente" >
    <img src="imagens/bobrossparrot.gif" alt="um papagaio de afro" class="verso">
    </div>`
}