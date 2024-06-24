// Funciones para mostrar las secciones de login y registro
function mostrarLogin() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginTab').classList.add('activo');
    document.getElementById('registerTab').classList.remove('activo');
}

function mostrarRegistro() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
    document.getElementById('loginTab').classList.remove('activo');
    document.getElementById('registerTab').classList.add('activo');
}

document.addEventListener('DOMContentLoaded', function() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (Object.keys(usuarios).length === 0) {
        mostrarRegistro();
    } else {
        mostrarLogin();
    }
});

function esMayorDeEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad >= 18;
}

function registrarUsuario(event) {
    event.preventDefault();

    const username = document.getElementById('register-usuario').value;
    const password = document.getElementById('register-password').value;
    const birthdate = document.getElementById('register-fecha-nacimiento').value;

    if (!esMayorDeEdad(birthdate)) {
        alert('Debes tener al menos 18 años para registrarte.');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (usuarios[username]) {
        alert('El nombre de usuario ya está registrado.');
        return;
    }

    usuarios[username] = password;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
    mostrarLogin();
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('input-usuario').value;
    const password = document.getElementById('input-password').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (usuarios[username] && usuarios[username] === password) {
        alert('Inicio de sesión exitoso.');
        document.getElementById('modalLogin').style.display = 'none'; // Cerrar el modal
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});