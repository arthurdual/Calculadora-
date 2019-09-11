/*jshint esversion: 6*/
let btnOperacao = document.querySelectorAll('.ope');
//let btnNumero = document.querySelectorAll('.num');
let btn1 = document.getElementById('#1');
let btn2 = document.getElementById('#2');
let btn3 = document.getElementById('#3');
let btn4 = document.getElementById('#4');
let btn5 = document.getElementById('#5');
let btn6 = document.getElementById('#6');
let btn7 = document.getElementById('#7');
let btn8 = document.getElementById('#8');
let btn9 = document.getElementById('#9');
let btn0 = document.getElementById('#0');
let btnIgual = document.querySelector('.igual');

btnIgual.onclick = function(){
    alert("teste");
};
btn1.onclick = function(){
    alert("1");
};

console.log(btnNumero);
console.log(btnOperacao);

/*let calcular = document.querySelector('button');
let txt1 = document.querySelector('input[name=Valor1]');
let txt2 = document.querySelector('input[name=Valor2]');
let radio = document.querySelectorAll('input[name=operacoes]');
let resut = document.querySelector('input[name=Resultado]');
//console.log(radio);

calcular.onclick = function(){
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            let v1 = parseFloat(txt1.value);
            let v2 = parseFloat(txt2.value);
            //console.log(v1);
            switch (radio[i].id) {
                case "som":
                    //console.log("soma");
                    //console.log (v1 + v2)
                    resut.value = (v1 + v2);
                    break;
                case "sub":
                    //console.log("subtração");
                    //console.log (v1 - v2);
                    resut.value = (v1 - v2);
                    break;
                case "div":
                   //console.log("divisão");
                    //console.log (v1 / v2);
                    resut.value = (v1 / v2);
                    break;
                case "mul":
                    //console.log("multiplicação");
                    //console.log (v1 * v2);
                    resut.value = (v1 * v2);
                    break;
                default:
                    break;
            }
            //console.log(radio[i].id);
        }
    }
};
*/