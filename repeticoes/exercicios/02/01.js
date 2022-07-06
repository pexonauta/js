function tabuada() {
    let inicio = document.getElementById('n1')
    let fim = document.getElementById('n2')
    let mostrar = document.getElementById('seltab')

    if (inicio.value.length == 0 || fim.value.length == 0){
        window.alert('Erro, Faltam Dados')
    }
    else{
        if(fim.value > 20){
            window.alert('Erro, Número [ Fim ] inadequado O Número Máximo é 20')
        }
        else{
            let i = Number(inicio.value)
            let f = Number(fim.value)
            tabuada.innerHTML = ''
            mostrar.innerHTML = `Tabuada Do: ${i}</p>`
            for(let c = 1; c<=f;c++){
                let item = document.createElement('option')
                item.text = `${i} x ${c} = ${i*c}`
                item.value = `tab${c}`
                mostrar.appendChild(item)
            }
        }

    }
}