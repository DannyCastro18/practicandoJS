// Ejercicio 13 Imprimir los primeros 10 números de la serie de Fibonacci


const diezFibonacci = () => {
    let num1 = 0
    let num2 = 1
    for (let i = 0; i < 10; i++) {
        console.log(num1)
        let num3 = num1 + num2
        num1 = num2
        num2 = num3
    }
}
diezFibonacci()