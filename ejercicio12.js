// Ejercicio 12 Pedir al usuario que ingrese un número entre 1 y 5

const numUser5 = () => {
    let num = parseInt(prompt("Ingresa un número entre el 1 y 5"))
    console.log(num)
    while (num < 1 || num > 5) {
        num = parseInt(prompt("Ingresa un número entre el 1 y 5"))
    }
}

numUser5()