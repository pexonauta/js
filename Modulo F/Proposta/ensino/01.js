let num = document.querySelector('input#n1')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }
    else{
        return false
    }

}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }

}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `O Valor ${num.value} Adicionar`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('Valor Inválido Ou Já Encontrado na Lista')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione Valores Antes De Finalizar')
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma+= valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao Todo, Temos ${tot} Elementos</p>`
        res.innerHTML += `<p>O Maior Valor Informado Foi ${maior}</p>`
        res.innerHTML += `<p>O Menor Valor Informado Foi ${menor}</p>`
        res.innerHTML += `<p>Somando Todos os Valores é ${soma}</p>`
        res.innerHTML += `<p>A Média Dos Números é: ${media}</p>`
    }
}