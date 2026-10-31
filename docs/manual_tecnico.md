
# Manual Tecnico

## Gestor de Clientes - Version 1.1

### Tecnologias utilizadas

El sistema fue desarrollado utilizando HTML, CSS y JavaScript.

Se utiliza Node.js para ejecutar las pruebas automaticas.

### Estructura del sistema

- src/index.html: contiene la estructura y el diseño del formulario.
- src/script.js: contiene la logica de registro y validacion.
- tests/test_validacion.js: contiene las pruebas automaticas.
- docs/: contiene la documentacion del proyecto.

### Funcionamiento del sistema

El archivo script.js obtiene los elementos del formulario utilizando document.getElementById().

Cuando el usuario presiona el boton de registro, se ejecuta un evento submit.

Se utiliza event.preventDefault() para evitar que la pagina se recargue.

Luego se obtienen los valores ingresados y se verifica que el telefono tenga un formato valido.

Si la validacion es correcta, el cliente se agrega a la lista mediante un elemento li.

Finalmente, formulario.reset() limpia los campos.

### Funcion validarTelefono()

En la version 1.1 se incorporo la siguiente funcion:

```javascript
function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}
```

Esta funcion recibe el telefono como parametro y utiliza una expresion regular para comprobar que contenga solamente numeros.

### Explicacion de la expresion regular

- ^ : indica el inicio del texto.
- [0-9] : permite numeros del 0 al 9.
- + : exige uno o mas numeros.
- $ : indica el final del texto.
- .test(tel) : comprueba si el valor cumple el formato.

La funcion devuelve true cuando el telefono es valido y false cuando contiene caracteres no permitidos.

### Control de validacion

Antes de registrar al cliente se ejecuta la siguiente condicion:

```javascript
if (!validarTelefono(telefono)) {
    alert("El telefono debe contener solamente numeros.");
    return;
}
```

Si el telefono no cumple el formato, se muestra una alerta y se detiene el registro.

### Pruebas automaticas

El archivo test_validacion.js utiliza assert de Node.js para verificar los resultados de la funcion.

La funcion se exporta mediante module.exports para permitir su uso desde el archivo de pruebas.

Tambien se utiliza typeof document para evitar errores al ejecutar el codigo fuera del navegador.

### Cambio implementado

Ticket: #101 - Validar formato de telefono.

Issue de GitHub: #1.

Version inicial: v1.0.

Version corregida prevista: v1.1.

Responsable: Diego Ponce.
