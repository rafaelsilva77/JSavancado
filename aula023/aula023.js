function soma(...valores) {
    let tam = valores.length
    let res = 0
    for (let i of valores) {
        res += i
    }
    return res
}
console.log(soma(10,5,11,6,7))










/* function soma(...valores) {
    let tam = valores.length
    let res = 0
    for (let i=0; i<tam; i++) {
        res += valores[i]
    }
    return res   
}

console.log(soma(10,5,11,6,7)) */