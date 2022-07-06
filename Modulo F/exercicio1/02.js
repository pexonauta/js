let num =  [3,2,1,5]
num.sort()
// for(let pos=0;pos<num.length;pos++){
//     console.log(`A Posisão ${pos} Tem o Valor ${num[pos]}`)
// }
for(let pos in num){
    console.log(`A Posisão ${pos} Tem o Valor ${num[pos]}`)
}