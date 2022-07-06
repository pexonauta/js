function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora2 = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        //Bom Dia
        img.src = 'img/bomdia.jpg'
        document.body.style.background = '#d89229'
    }
    else if(hora >=12 && hora <18){
        //Boa Tarde
        img.src = 'img/boatarde.jpg'
        document.body.style.background = '#c47240'
    }
    else {
        //Boa Noite
        img.src = 'img/boanoite.jpg'
        document.body.style.background = '#151b1b'
    }
}
