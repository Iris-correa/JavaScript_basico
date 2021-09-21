function contar(){
    var inicio = document.getElementById('txtin')
    var fim = document.getElementById('txtfi')
    var pass = document.getElementById('txtpa')
    var text = document.getElementById('cont')
    var num = document.getElementById('cont2')

  if(inicio.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
    text.innerHTML = 'Impossivel contar!'
      if(pas == 0){
        alert('Não é possível contabilizar')
      }
  }
  else {
    text.innerHTML = 'Contando:'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(pass.value)

      for(let c = i; c <= f; c += p){
        text.innerHTML += ` ${c} `
      }
  }
}