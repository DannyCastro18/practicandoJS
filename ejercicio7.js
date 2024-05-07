// Ejercicio 7 Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx»


const generarCaracteres = (numChar, character) => {
    let resultado = ''

    for (let i = 0; i < numChar; i++) {
        resultado += character
    }
    return resultado
}
console.log(generarCaracteres(18,':)'))
