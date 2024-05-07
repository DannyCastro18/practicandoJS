// Ejercicio 16 Pedir al usuario que ingrese un número positivo utilizando un bucle do-while y mostrar un mensaje de error si no lo hace

const numeroPositivo = () => {
    let numero = 0
    do {
        numero = parseInt(prompt("Ingresa un número positivo"))
    } while (numero < 0)
    console.log(numero)
}

numeroPositivo()