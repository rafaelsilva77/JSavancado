
const f=new Function("v1","v2","return v1 + v2")//Função Construtor Anônima

console.log(f(10,5))






/*Função anônimas
let f = function(...valores) {
    let res = 0
    for(v of valores) {
        res += v
    }
    return res
}

console.log(f(10,5)) */