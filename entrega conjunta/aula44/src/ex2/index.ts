function soma(x: number, y: number): number {
    return (x + y)
    console.log(soma)
}

function subtrai(x: number, y: number): number {
    return (x - y)
    console.log(subtrai)
}

function mult(x: number, y: number): number {
    return (x * y)
    console.log(mult)
}

function maior(x: number, y: number) {
    let diferença = x - y
    diferença > 0 ? console.log(x + "> " + y) : console.log(x + "< " + y);
}