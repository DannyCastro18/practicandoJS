// Ejercicio 8 Sumar los números del 1 al 10 utilizando un bucle.

const sumarDiezNumeros = () => {
    let sumaDiez = 0 
    for (let i = 0; i <= 10; i++) {
        sumaDiez += i
    }
    return sumaDiez
}
console.log(sumarDiezNumeros())