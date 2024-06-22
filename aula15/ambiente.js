let num = [5,8,4]
num[3] = 6
num[7] = 3

num.push(7)//colocando um numero na última posição
num.sort()//coloca vetor em ordem


console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(` Nosso vetor é o ${num}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}




/*for(let pos=0; pos < num.length; pos++)
    console.log(num.pos)*/