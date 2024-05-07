// Ejercicio 4 Escribe una función que imprima todos los números pares hasta un límite dado

const imprimirPares = (lim) => {
    for (let i = 0; i <= lim; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
console.log(imprimirPares(16))