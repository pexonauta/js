function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Erro, Verifique Os Dados Novamente')
    }
    else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','img/criancahomem.jpg')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovemhomem.jpg')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src','img/adultohomem.jpg')
            }
            else{
                //idoso
                img.setAttribute('src','img/idosohomem.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src', 'img/criancamulher.jpg')
            }
            else if(idade <21){
                //jovem
                img.setAttribute('src', 'img/jovemmulher.jpg')
            }
            else if(idade < 50){
                //Adulta
                img.setAttribute('src', 'img/adultomulher.jpg')
            }
            else{
                //idosa
                img.setAttribute('src','img/idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}