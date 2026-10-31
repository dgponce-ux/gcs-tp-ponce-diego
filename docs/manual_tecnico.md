
# Manual Tecnico

## Gestor de Clientes - Version 1.0

### Tecnologias utilizadas

El sistema fue desarrollado utilizando HTML, CSS y JavaScript.

### Estructura del sistema

- src/index.html: contiene la estructura y el diseño del formulario.
- src/script.js: contiene la logica para registrar clientes.
- tests/: contiene los archivos destinados a las pruebas.
- docs/: contiene la documentacion del proyecto.

### Funcionamiento del codigo

El archivo script.js obtiene los elementos del formulario utilizando document.getElementById().

Cuando el usuario presiona el boton de registro, se ejecuta un evento submit.

Se utiliza event.preventDefault() para evitar que la pagina se recargue.

Luego se obtienen los valores ingresados y se crea un elemento li para mostrar al cliente registrado.

Finalmente, formulario.reset() limpia los campos.

### Limitaciones de la version 1.0

El sistema no cuenta con una funcion que valide el formato del telefono.

Por este motivo, permite registrar telefonos que contienen letras.

Esta limitacion sera corregida en una version posterior.
