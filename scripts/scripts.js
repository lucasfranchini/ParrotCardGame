let numero_cartas =0, numero_viradas =0,acertos =0,numero_jogadas =0;
let timer=0;
const deck = document.querySelector(".campo");
let clock;
let aleatorio = [];
iniciar();
function iniciar (){
    while(numero_cartas<4 || numero_cartas>14 || numero_cartas%2 === 1){
        numero_cartas = parseInt(prompt("com quantas cartas você quer jogar"));
    }
    for (let i=0;i<numero_cartas;i++){
        deck.innerHTML = `${deck.innerHTML}  
        <div class="carta" onclick="virar(this)">
            <div class="frente face">
                <img src="imagens/front.png" alt="um papagaio" >
            </div>
            <div class="face">
                <img src="">
            </div>
        </div>`
        aleatorio.push(i);
    }
    aleatorio.sort(comparador);
    const cartas = document.querySelectorAll(".campo .carta");
    for (let i=0,imagen_escolhida = 1;i<numero_cartas;i++){
        if(i%2 ===0 && i!== 0){
            imagen_escolhida++;
        }
        cartas[aleatorio[i]].querySelectorAll("img")[1].setAttribute("src",`imagens/${imagen_escolhida}.gif`);
    }
    clock =setInterval(relogio,1000);
}
function relogio(){
    timer++;
    const relogio = document.querySelector(".relogio")
    const minutos = parseInt(timer/60);
    const segundos =  timer%60;
    relogio.innerHTML = `${minutos}:${segundos}`;
}
function virar(cartavirada){
    numero_viradas ++;
    numero_jogadas++;
    cartavirada.children[0].classList.toggle("frente");
    cartavirada.children[1].classList.toggle("virada"); 
    if(numero_viradas ===2){
        const viradas=document.querySelectorAll(".campo .carta .virada");
        numero_viradas= 0;
        if(viradas[1].innerHTML === viradas[0].innerHTML){
            viradas[0].classList.remove("virada");
            viradas[1].classList.remove("virada");
            viradas[0].classList.add("acertadas");
            viradas[1].classList.add("acertadas");
            acertos += 2;
        }
        else{
            document.querySelector(".campo").classList.add("esperando");
            setTimeout(desvirar,1000,viradas);
        }
        if(acertos === numero_cartas)
        {
            clearInterval(clock);
            setTimeout(recomeçar,300);
        }
    }
}
function recomeçar(){
    alert(`você ganhou em ${numero_jogadas} jogadas e demorou ${timer} segundos` );
    const resposta =prompt("gostaria de jogar de novo?(sim ou não)");
    if(resposta === "sim"){
        numero_cartas =0;
        numero_viradas =0;
        acertos =0;
        numero_jogadas =0;
        timer=0;
        deck.innerHTML = "";
        aleatorio = [];
        iniciar();
      }
}
function desvirar (viradas){
    viradas[0].classList.remove("virada");
    viradas[1].classList.remove("virada");
    viradas[0].parentNode.children[0].classList.toggle("frente");
    viradas[1].parentNode.children[0].classList.toggle("frente");
    document.querySelector(".campo").classList.remove("esperando");
    
}
function comparador() { 
	return Math.random() - 0.5; 
}
