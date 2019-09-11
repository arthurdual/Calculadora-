/*jshint esversion: 6*/
let btnFuncao = document.querySelectorAll('.func');
let btnOperacao = document.querySelectorAll('.ope');
let btnNumero = document.querySelectorAll('.num');
let btnIgual = document.querySelector('.igual');
let visor = document.querySelector('input[name=visor]');
/*
    C é uma sigla para "clear" ("limpar", em inglês) e 
    CE, para "cancel entry" ("cancelar registro"). 
    M+, é para você colocar um número na memória. 
    M-, é para você subtrair um número da memória.. 
    vamos dar um ex. 
    você digita o numero 100, e em seguida aperta a tecla M+ 
    Você colocou o numero 100 na memória. 
    digamos que agora você digitou o numero 30 e apertou a tecla M-, você esta subtraindo 30 de 100, portanto na memória ficará somente o numero 70. 

    Leia mais em Brainly.com.br - https://brainly.com.br/tarefa/5354688
*/


for( let i=0; i<btnFuncao.length; ++i ){
    //console.log(i, btnFuncao[i].id);
        btnFuncao[i].onclick = function(){
            //console.log(i,btnFuncao[i].id);
            switch (btnFuncao[i].id) {
                case "OnOff":
                    let on = true;
                    //alert("on");
                    break;
                case "(":
                    visor.value += "(";
                    break;
                case ")":
                    visor.value += ")";
                     break;
                case "CE":
                    visor.value -= " ";
                    break;
                case "C":
                    visor.value = "";
                    break;
                case "M+":
                    visor.value += "m+";
                    break;
                case "M-":
                    visor.value += "m-";
                    break;
                case "MRC":
                    visor.value += "MRC";
                    break;
            }
        }
}
for( let i=0; i<btnNumero.length; ++i ){
    //console.log(i, btnNumero[i].id);
        btnNumero[i].onclick = function(){
            //console.log(i,btnNumero[i].id);
            switch (btnNumero[i].id) {
                case "1":
                    visor.value += 1;
                    break;
                case "2":
                    visor.value += 2;
                    break;
                case "3":
                    visor.value += 3;
                    break;
                case "4":
                    visor.value += 4;
                    break;
                case "5":
                    visor.value += 5;
                    break;
                case "6":
                    visor.value += 6;
                    break;
                case "7":
                    visor.value += 7;
                    break;
                case "8":
                    visor.value += 8;
                    break;
                case "9":
                    visor.value += 9;
                    break;
                case "0":
                    visor.value += 0;
                    break;
                case "ponto":
                    visor.value += ".";
                    break;
                default:
                    break;
            }
        }
}

for( let i=0; i<btnOperacao.length; ++i ){
    //console.log(i, btnOperacao[i].id);
        btnOperacao[i].onclick = function(){
            //console.log(i,btnOperacao[i].id);
            switch (btnOperacao[i].id) {
                case "divi":
                    visor.value += "/";
                    break;
                case "mult":
                    visor.value += "*";
                    break;
                case "subt":
                    visor.value += "-";
                    break;
                case "soma":
                    visor.value += "+";
                    break;
                default:
                    break;
            }
        }
}
document.addEventListener('keypress', function(e){
    //console.log(e.which);
    if(e.which == 13){
        visor.value = eval(visor.value);
    }
 });
btnIgual.onclick = function(){
    //console.log(eval(visor.value));
    visor.value = eval(visor.value);
    //visor.value = "";
};