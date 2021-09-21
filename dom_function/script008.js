function soma(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')

    var n1 = Number(tn1.value)//valor que está dentro do n1 para conversão numérica, e não concatenar
    var n2 = Number(tn2.value)

    var s = n1 + n2

    res.innerHTML = `O resultado entre ${n1} e ${n2} é igual a <strong>${s.toFixed(2)}</strong>`

}