let num = [5,3,7,9,8]

num.push(1)
num.sort()

console.log(num)
console.log(`Nosso Vetor Tem ${num.length} elementos`)
console.log(`Nosso Primeiro Valor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`Valor Não Encontrado`)
}else{
    console.log(`O Valor ${num[pos]} Esta na posisão ${pos}`)
}