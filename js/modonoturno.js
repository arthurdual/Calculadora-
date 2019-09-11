function modoNoturno() {
  //coloca a classe 'night-mode' no body
  document.body.classList.toggle('night-mode');
  //Se o botao estiver = a dia ele coloca noite
  if (btnFuncao[0].innerText == 'Dia') {
    btnFuncao[0].innerText ='Noite';
  } else {//Se nao ele coloca dia
    btnFuncao[0].innerText ='Dia'
  }
  //Percorre o array de botoes com func (funções dea calculadora) e muda para nFunc (versao modo noturno)
  for (let i = 0; i < btnFuncao.length; i++) {
    btnFuncao[i].classList.toggle("nFunc")
  }
  //mesma coisa que o anterior porem com ope (Operações)
  for (let i = 0; i < btnOperacao.length; i++) {
    btnOperacao[i].classList.toggle("nOpe")  
  }
  //mesma coisa que o anterior porem com num (numeros)
  for (let i = 0; i < btnNumero.length; i++) {
    btnNumero[i].classList.toggle("nNum")  
  }
}
// pega o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode')
const nightMode = document.querySelector('#night-mode')

// ao clicar ativa modo noturno
nightMode.addEventListener('click', () => {
  // ativa noite
  modoNoturno();
  // se tiver a classe night-mode
  if (document.body.classList.contains('night-mode')) {
    // salva o tema no localStorage
    localStorage.setItem('gmtNightMode', true)
    return
  }
  // senão remove
  localStorage.removeItem('gmtNightMode')
})
// caso tenha o valor no localStorage ativa modo noturno
if (nightModeStorage) {
  //ativa noite
  modoNoturno()
}

