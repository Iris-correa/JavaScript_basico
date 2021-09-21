
function carregar() {

var msg = document.getElementById('msg')

var img = document.getElementById('imagem')

var body = document.getElementById('corpo')

var dia = document.getElementById('dia')

var data = new Date()

var hora = data.getHours()



    if(hora >= 0 && hora < 12){
        msg.innerHTML = (`Agora são ${hora} horas AM.`)
        img.src = 'manha.jpg'
        body.style.background = '#ffc601'
        dia.innerHTML = ('Bom dia!')

    }
    //Bom dia
    else if (hora >= 12 && hora < 18){
        msg.innerHTML = (`Agora são ${hora} horas PM.`)
        img.src = 'tarde.jpg'
        body.style.background = '#bd8c8f'
        dia.innerHTML = ('Boa tarde!')
    }
    //Boa tarde
    else {
        msg.innerHTML = (`Agora são ${hora} horas PM.`)
        img.src = 'noite.jpg'//boa noite
        body.style.background = '#032124'
        dia.innerHTML = ('Boa noite!')
    }
}