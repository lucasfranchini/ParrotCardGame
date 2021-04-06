let numero_cartas =14;
const deck = document.querySelector(".campo");
while(numero_cartas<4 || numero_cartas>14 || numero_cartas%2 === 1){
    numero_cartas = parseInt(prompt("com quantas cartas você quer jogar"));
}
for (let i=0;i<numero_cartas;i++){
    deck.innerHTML = `${deck.innerHTML}  
    <div class="carta" onclick="virar(${i})">
    <img src="imagens/front.png" alt="um papagaio" class="frente">
    <img src="">
    </div>`
}
const cartas = document.querySelectorAll(".campo .carta");

for (let i=0,imagen_escolhida = 1;i<numero_cartas;i++){
    if(i%2 ===0 && i!== 0){
        imagen_escolhida++;
    }
    cartas[i].querySelectorAll("img")[1].setAttribute("src",`imagens/${imagen_escolhida}.gif`)
}
function virar(i){
    cartas[i].querySelectorAll("img")[0].classList.toggle("frente");
    cartas[i].querySelectorAll("img")[1].classList.toggle("frente");
}