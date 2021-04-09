let numeroCartas =0, numeroViradas =0,acertos =0,numeroJogadas =0;
let timer=0;
const deck = document.querySelector(".campo");
let clock;
let aleatorio = [];
const imagens = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif", "tripletsparrot.gif","unicornparrot.gif"]

iniciar();

function iniciar (){
    while(numeroCartas<4 || numeroCartas>14 || numeroCartas%2 === 1){
        numeroCartas = parseInt(prompt("com quantas cartas você quer jogar"));
    }
    for (let i=0;i<numeroCartas;i++){
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
    for (let i=0,imagenEscolhida = 0;i<numeroCartas;i++){
        if(i%2 ===0 && i!== 0){
            imagenEscolhida++;
        }
        cartas[aleatorio[i]].querySelectorAll("img")[1].setAttribute("src",`imagens/${imagens[imagenEscolhida]}`);
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

function virar(cartaVirada){
    numeroViradas ++;
    numeroJogadas++;
    cartaVirada.children[0].classList.toggle("frente");
    cartaVirada.children[1].classList.toggle("virada"); 
    if(numeroViradas ===2){
        const viradas=document.querySelectorAll(".campo .carta .virada");
        numeroViradas= 0;
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
        if(acertos === numeroCartas)
        {
            clearInterval(clock);
            setTimeout(recomeçar,300);
        }
    }
}

function recomeçar(){
    alert(`você ganhou em ${numeroJogadas} jogadas e demorou ${timer} segundos` );
    const resposta =prompt("gostaria de jogar de novo?(sim ou não)");
    if(resposta === "sim"){
        numeroCartas =0;
        numeroViradas =0;
        acertos =0;
        numeroJogadas =0;
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
