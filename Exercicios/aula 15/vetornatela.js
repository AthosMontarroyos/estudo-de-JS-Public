let num = [5 , 8, 2, 9, 3]
num.sort()
/*for(let pos=0; pos < num.length ; pos++) {
    console.log(` a posição ${pos} tem o valor ${num[pos]}`)

}*/

for(let pos in num) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}