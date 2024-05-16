//Usando Arrays y Objetos Literales

function generarContrasena(anioNacimiento) {
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    return anioNacimiento.toString(16) + numeroRandom;
}

const listaUsuarios = [];
const cantidadUsuarios = parseInt(prompt("¿Cuántos usuarios desea ingresar?"));

for (let i = 0; i < cantidadUsuarios; i++) {
    const usuario = {
        nombre: prompt("Ingrese el nombre del usuario:"),
        id: prompt("Ingrese el ID del usuario:"),
        anioNacimiento: parseInt(prompt("Ingrese el año de nacimiento del usuario:")),
        contrasena: ''
    };
    usuario.contrasena = generarContrasena(usuario.anioNacimiento);
    listaUsuarios.push(usuario);
}

console.log(listaUsuarios);