// Ejercicio 3 Escribe una función que calcule el promedio de números dados

const calcularPromedio = (nota1, nota2) => {
    let promedio = (nota1 + nota2) / 2
    return `El promedio de los dos números es ${promedio}`
}
console.log(calcularPromedio(4.5, 2,7))