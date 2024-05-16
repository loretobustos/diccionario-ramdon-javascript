//usando bucles y funciones

function generarContrasena(anioNacimiento) {
    const numeroRandom = Math.floor(Math.random() * 100) + 1;
    return anioNacimiento.toString(16) + numeroRandom;
}

function crearUsuario() {
    const nombre = prompt("Ingrese el nombre del usuario:");
    const id = prompt("Ingrese el ID del usuario:");
    const anioNacimiento = prompt("Ingrese el año de nacimiento del usuario:");
    const contrasena = generarContrasena(anioNacimiento);
    return {
        nombre: nombre,
        id: id,
        anioNacimiento: anioNacimiento,
        contrasena: contrasena
    };
}

const cantidadUsuarios = prompt("¿Cuántos usuarios desea ingresar?");
const listaUsuarios = [];

for (let i = 0; i < cantidadUsuarios; i++) {
    listaUsuarios.push(crearUsuario());
}

console.log(listaUsuarios);
