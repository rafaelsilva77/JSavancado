function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
    yield 'Rosa'
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

