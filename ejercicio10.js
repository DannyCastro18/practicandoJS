// Ejercicio 10 Generar un número aleatorio entre 1 y 10 hasta que se obtenga un 7


const generarNumero = (aleatorio) => {
    let numeroAleatorio = Math.floor(Math.random() * 11)
    while (numeroAleatorio != aleatorio) {
        numeroAleatorio = Math.floor(Math.random() * 11)
        console.log(numeroAleatorio)
    }
    return numeroAleatorio
}
generarNumero(7)