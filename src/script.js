
// Esta funcion es la que verifica que el telefono contenga solamente numeros.
function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

// Exporta la funcion para poder usarla en las pruebas.
if (typeof module !== "undefined") {
    module.exports = validarTelefono;
}

// Comprueba que el codigo se este ejecutando en el navegador.
if (typeof document !== "undefined") {

    // Obtiene los elementos del formulario.
    const formulario = document.getElementById("formularioCliente");
    const listaClientes = document.getElementById("listaClientes");

    // Este es el evento que se ejecuta al registrar un cliente.
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Aca se obtienen los datos ingresados.
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;

        // Se verifica que el telefono contenga solamente numeros.
        if (!validarTelefono(telefono)) {
            alert("El telefono debe contener solamente numeros.");
            return;
        }

        // Se registra el cliente si el telefono es valido.
        const nuevoCliente = document.createElement("li");
        nuevoCliente.textContent = nombre + " - Telefono: " + telefono;

        listaClientes.appendChild(nuevoCliente);

        // Se limpia el formulario.
        formulario.reset();
    });
}
