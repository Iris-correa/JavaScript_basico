
function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    
    //Certificar que o ano digitado é menor que o ano atual
    if (fano.value.length == 0 || Number(fano.value) >= ano){
        alert('Coloque um ano válido!')
    }

    else{
        //variável interligada com o radsex - input radio
        var fsex = document.getElementsByName('radsex')
        //variável idade, ano - valor do input
        var idade = ano - Number(fano.value)
        //variavel genero em aberto para adicionar seu valor somente com a condição
        var genero = ''
        //Criação da imagem interagindo com DOM
        var img = document.createElement('img')
        img.setAttribute('id', 'foto' )

        //conição para genero

        if(fsex[0].checked){
            genero = 'Homem'
            //condição para img
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'crianco.jpg')
                
            }
            else if(idade < 21){
                // Jovem 
                img.setAttribute('src', 'menino.jpg')
            }
            else if (idade < 50 ){
                // adulto
                img.setAttribute('src', 'adulto.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'veio.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
             //condição para img
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'criancaca.jpg')
            }
            else if(idade < 21){
                // Jovem 
                img.setAttribute('src', 'menina.jpg')
            }
            else if (idade < 50 ){
                // adulto
                img.setAttribute('src', 'adulta.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'veia.jpg')
            }
        }
        // centralizando com javascript

        res.style.textAlign = 'center'

        //resultado acrescentando o templade de genero e a idade

        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
       

        // img redonda

        img.style.borderRadius = '300px'
        img.style.display = 'block'
        img.style.margin = '20px 0px 20px 150px '

        //ADICIONAR UM ELEMENTO ABAIXO

        res.appendChild(img)
    }
}
