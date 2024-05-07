// Ejercicio 14 Pedir al usuario que ingrese una contraseña y repetir la solicitud hasta que ingrese una contraseña válida (por ejemplo, "contraseña123").

const passwordUser = () => {
    let password = prompt("Ingresa la contraseña")
    while (password != "password123") {
        password = prompt("Ingresa la contraseña")
    }
}
passwordUser()