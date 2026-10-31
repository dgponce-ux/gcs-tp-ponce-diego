
// Obtener los elementos del formulario.
const formulario = document.getElementById("formularioCliente");
const listaClientes = document.getElementById("listaClientes");

// Evento que se ejecuta al registrar un cliente.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los datos ingresados.
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;

    // Registrar el cliente sin validar el telefono.
    const nuevoCliente = document.createElement("li");
    nuevoCliente.textContent = nombre + " - Telefono: " + telefono;

    listaClientes.appendChild(nuevoCliente);

    // Limpia el formulario.
    formulario.reset();
});
