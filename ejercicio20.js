// Ejercicio 19 Imprimir la secuencia de números del 1 al 100, pero para múltiplos de 3 imprimir "Fizz", para múltiplos de 5 imprimir "Buzz" y para múltiplos de ambos 3 y 5 imprimir "FizzBuzz“.

const fizzBuzz = () => {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()