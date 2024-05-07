// Ejercicio 18 Calcular el factorial de un número dado

const factorialDado = (factorial) => {
    let resultado = 1
    for(let i = factorial; i > 0; i--) {
        resultado *= i
    }
    console.log(resultado)
}
factorialDado(3)