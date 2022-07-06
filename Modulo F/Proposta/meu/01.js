//Numero
let num1 = document.getElementById('n1')
//Botao De Inserir Numero
let botao = document.getElementById('btn')
//Botao De Finalizar 
let botao2 = document.getElementById('btn2')
//Select Da Resposta
let res = document.getElementById('res')
//Div Da Resposta
let res2 = document.getElementById('res2')
//Criando Vettor para o botao 2
let vtn2 = []
//Evento De Click
botao.addEventListener('click', function(){
    res2.innerHTML = ''
    //Verificando Se Tem Algum Numero
    if(num1.value.length == 0){
        window.alert('Erro, Tente Novamente')
    }
    else{
        if(vtn2.indexOf(Number(num1.value)) != -1){
            window.alert('Número Já Encontrado na Lista')
        }
        else{
            //Colocando Valor 
            let n1 = Number(num1.value)
            //Criando um Elemento
            let item = document.createElement('option')
            //Criando Um Vetor
            let numeros = []
            //Adicionando Número No Vetor
            numeros.push(n1)
            vtn2.push(n1)
            //Contator
            let cont = 0
            //Pegando O Número De Dentro Do Vetor 
            item.text += `O Valor ${numeros[cont]} Foi Adicionado`
            //Contator
            cont++
            //Inserindo Dentro Do Select
            res.appendChild(item)
            //Deixando Em Branco O Input
            num1.value = ''
            //Focando O Input Apos A Inserção
            num1.focus()
        }
    }
})

botao2.addEventListener('click', function(){
    if(vtn2.length < 1){
        window.alert('Erro, Adicione Um Número Primeiro!!')
    }
    else if (vtn2.length == 1) {
        window.alert('Adiicione Mais Um Número!!!')
    }
    else{
        //Variaveis
        let maior = vtn2[0]
        let menor = vtn2[0]
        let sum = 0
        //For Para Maior Menor e Soma
        for( let pos in vtn2){
            //Somando Todos Os Números Dentro Do Vetor
            sum += vtn2[pos]
            //Verificando o Maior Número
            if(vtn2[pos] >  maior){
                maior = vtn2[pos]
            }
            //Verificando O Menor Número
            if(vtn2[pos] < menor){
                menor = vtn2[pos]
            }
        }
        let med = sum/vtn2.length
        let media = med.toFixed(2)
        res2.innerHTML = `Números Inseridos ${vtn2}</br>`
        res2.innerHTML += `O Maior Número Inserido é ${maior}</br>`
        res2.innerHTML += `O Menor Número Inserido é ${menor}</br>`
        res2.innerHTML += `A Soma De Todos Os Números é De ${sum}</br>`
        res2.innerHTML += `A Média De Todos Os Números é De ${media}</br>`
    }
})