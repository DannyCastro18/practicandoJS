// Ejercicio 15 Imprimir los primeros 5 números primos

const numerosPrimos = () => {
    let numero = 2
    for (let i = 0; i < 11; i++) {
        let contador = 0
        for (let j = 1; j <= numero; j++) {
            if (numero % j == 0) {
                contador++
            }
        }
        if (contador == 2) {
            console.log(numero)
        }
        numero++
    }
}   
numerosPrimos()