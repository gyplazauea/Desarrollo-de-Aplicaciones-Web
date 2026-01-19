const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");
const errorConfirmar = document.getElementById("errorConfirmar");
const errorEdad = document.getElementById("errorEdad");

function validarNombre() {
    if (nombre.value.trim().length >= 3) {
        nombre.className = "valido";
        errorNombre.textContent = "";
        return true;
    } else {
        nombre.className = "invalido";
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres";
        return false;
    }
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value)) {
        correo.className = "valido";
        errorCorreo.textContent = "";
        return true;
    } else {
        correo.className = "invalido";
        errorCorreo.textContent = "Correo electrónico no válido";
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (regex.test(password.value)) {
        password.className = "valido";
        errorPassword.textContent = "";
        return true;
    } else {
        password.className = "invalido";
        errorPassword.textContent = "Mínimo 8 caracteres, un número y un símbolo";
        return false;
    }
}

function validarConfirmar() {
    if (confirmar.value === password.value && confirmar.value !== "") {
        confirmar.className = "valido";
        errorConfirmar.textContent = "";
        return true;
    } else {
        confirmar.className = "invalido";
        errorConfirmar.textContent = "Las contraseñas no coinciden";
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        edad.className = "valido";
        errorEdad.textContent = "";
        return true;
    } else {
        edad.className = "invalido";
        errorEdad.textContent = "Debe ser mayor o igual a 18 años";
        return false;
    }
}

function validarFormulario() {
    btnEnviar.disabled = !(
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmar() &&
        validarEdad()
    );
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmar.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
});
