// Ejercicio 6 Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales devolver un String «son iguales»

const numeroMayor = (mayor1, mayor2, mayor3) => {
    if (mayor1 > mayor2 && mayor1 > mayor3) {
        return mayor1
    } else if(mayor2 > mayor1 && mayor2 > mayor3){
        return mayor2
    } else if(mayor3 > mayor1 && mayor3 > mayor2){
        return mayor3
    } else {
        return 'son iguales'
    }
}   
console.log(numeroMayor(23, 344, 256))