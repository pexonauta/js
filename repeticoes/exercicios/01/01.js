function verificar() {
    let inicio = document.getElementById('n1')
    let fim = document.getElementById('n2')
    let passo = document.getElementById('n3')
    let mostrar = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        mostrar.innerHTML = 'Impossivel Contar'
    } else {
        mostrar.innerHTML = `Contando: </br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //Verificando o passo menor ou igual do que 0
        if(p <=0){
            window.alert('Passo Invalido! Considerando Passo 1')
            p = 1
        }
        if(i < f){
            //Contagem Crescente
            for (let c = i; c <= f; c += p) {
                mostrar.innerHTML += ` ${c} \u{1F449}`
                console.log(c)
            }
        }
        else{
            ///Contagem Regressiva
            for(let c=1; c>=f; c-=p){
                mostrar.innerHTML += `${c} \u{1f449}`
            }
        }
        mostrar.innerHTML += `\u{1f3c1}`
    }
}