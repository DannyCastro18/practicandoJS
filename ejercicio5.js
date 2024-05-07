// Ejercicio 5 Escribe una funcion que imprima la tabla de multiplicar del número dado

const numeroTabla = (tabla) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${tabla} * ${i} = ${tabla * i}`)
    }
}
console.log(numeroTabla(5))