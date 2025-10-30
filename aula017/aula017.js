//5! = 5 * 4 * 2 * 1 

let n = 20
let fat = 1

while(n >= 1) {
    fat *= n
    n--
}

console.log(fat)