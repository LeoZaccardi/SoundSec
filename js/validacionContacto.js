document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-contacto");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita el envío si hay errores

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();
        const errores = [];

        // Validación de nombre
        if (nombre.length < 3) {
            errores.push("El nombre debe tener al menos 3 caracteres.");
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errores.push("Ingresá un correo electrónico válido.");
        }

        // Validación de mensaje
        if (mensaje === "") {
            errores.push("El mensaje no puede estar vacío.");
        }

        // Mostrar errores o exito
        if (errores.length > 0) {
            alert("Errores encontrados:\n\n" + errores.join("\n"));
        } else {
            alert("¡Formulario enviado con éxito!");
            form.reset();
        }
    });
});