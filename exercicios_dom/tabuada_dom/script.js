function contar(){

    let num = document.getElementById('txtin')
    let tab = document.getElementById('seltab')


    if(num.value.length == 0){
      window.alert('Amigo! digite um número válido!')
    }

    else{ 
       let n = Number(num.value)
       let c = 1

      while(c<= 10){
        let item = document.createElement('option')
        item.text = ` ${n} X ${c} = ${n*c}`
        tab.appendChild(item)
        c++
        }
   }
}