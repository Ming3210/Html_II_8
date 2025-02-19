type Square = {
    kind:"square",
    length:number
}

type Circle = {
    kind:"circle",
    radius:number
}

type Shape = Circle | Square
function calculate(shape:Shape): number {
    if (shape.kind === "square") {
        return shape.length**2
    }else if (shape.kind === "circle") {
        return Math.PI * shape.radius**2
    }else throw Error("Invalid shape")
}

console.log(calculate({kind:"square", length:5}))