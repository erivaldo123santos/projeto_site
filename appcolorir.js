caixa1.onblur = function(){
    let span = document.getElementById("mensagem");
    if(caixa1.value == 24){
        span.innerHTML = "Você acertou! Parabéns!!!";
        span.classList.toggle("text-primary");
        span.classList.add('bg-light');
    }else{
        span.innerHTML = "Tente novamente!!!";
        span.classList.toggle("text-danger");
    }
}

var cor="";

azul.onclick = function(){
    cor = "darkblue";
}

amarelo.onclick = function(){
    cor = "gold";
}

function divisivelpor5(){

    if(cor == "darkblue"){
        resultado.innerHTML = "Parabéns você acertou!!!";
    }else{
        resultado.innerHTML = "Tente novamente!";
    }
}

function divisivelpor7(){
    if(cor == "gold"){
        resultado.innerHTML = "Parabéns, você acertou!!!";
    }else{
        resultado.innerHTML = "Tente novamente!";
    }
}


num1.onclick = function(){
    num1.style.backgroundColor = cor;
    divisivelpor5();
    cor="";
}

num2.onclick = function(){
    num2.style.backgroundColor = cor;
    divisivelpor7();
    cor="";
}

num3.onclick = function(){
    num3.style.backgroundColor = cor;
    divisivelpor5();
    cor="";

}

num4.onclick = function(){
    num4.style.backgroundColor = cor;
    divisivelpor7();
    cor="";
}
