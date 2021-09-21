/*var idade = 22

console.log(`Você tem ${idade} anos!`)
if(idade < 16){
    console.log('Você não vota!')
}

else if( idade < 18 || idade >=65){
        console.log('Voto opcional!')
    }
    else{
        console.log('Voto obrigatório!')
    }*/

    var agora = new Date()
    var hora = agora.getHours() //pegar a hora atual

     if(hora < 12){
        console.log(`Bom dia! São ${hora}:00 horas.`)
    }

    else if(hora <= 18 ){
        console.log(`Boa tarde! São ${hora}:00 horas.`)
    }

    else {
        console.log(`Boa noite! São ${hora}:00 horas.`)
    }
    