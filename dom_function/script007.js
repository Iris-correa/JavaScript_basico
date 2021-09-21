var a =document.querySelector('div#area')

a.addEventListener('click', clique)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clique(){ // Quando eu chamar o clicar ele vai executar tudo que está aqui dentro
     // a é um objeto que tem a ligação como elemento área 
  //  a.style.background = 'pink' change the color
 a.innerText = 'Clicou!'
} // mudar o texto 

function entrar(){ // Entrar
    a.innerText = 'Entrou!'
    a.style.background = '#020699'
}

function sair(){
    a.innerText = 'Saiu!'
    a.style.background = '#030355'
}