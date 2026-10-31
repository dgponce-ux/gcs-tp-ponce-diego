
# Manual de Usuario

## Gestor de Clientes - Version 1.1

### Descripcion

El sistema permite registrar clientes ingresando su nombre y numero de telefono.

En la version 1.1 se incorporo una validacion para evitar el registro de telefonos que contengan letras o caracteres no permitidos.

### Instrucciones de uso

1. Abrir el archivo index.html desde un navegador.
2. Ingresar el nombre del cliente.
3. Ingresar un telefono que contenga solamente numeros.
4. Presionar el boton "Registrar cliente".
5. Verificar que los datos aparezcan en la lista de clientes registrados.

### Validacion del telefono

El campo telefono solamente permite registrar valores numericos del 0 al 9.

Si el usuario ingresa letras, espacios o caracteres especiales, el sistema muestra el siguiente mensaje:

"El telefono debe contener solamente numeros."

En ese caso, el cliente no se registra hasta que se ingrese un telefono valido.

### Ejemplo de registro correcto

Nombre: Diego Ponce

Telefono: 2804123456

Resultado: El cliente se registra correctamente.

### Ejemplo de registro incorrecto

Nombre: Diego Ponce

Telefono: ABC12345

Resultado: El sistema muestra una alerta y no registra al cliente.

### Versiones

- v1.0: Registro de clientes sin validacion del telefono.
- v1.1: Registro de clientes con validacion numerica.
