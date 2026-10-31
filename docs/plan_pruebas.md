
# Plan de Pruebas

## Gestor de Clientes - Version 1.0

### Objetivo

Comprobar el funcionamiento inicial del formulario de registro de clientes e identificar posibles errores.

### Caso de prueba 1: Registro con telefono numerico

Datos ingresados:

- Nombre: Diego Ponce
- Telefono: 2804123456

Resultado esperado:

El sistema registra correctamente al cliente.

### Caso de prueba 2: Registro con letras en el telefono

Datos ingresados:

- Nombre: Diego Ponce
- Telefono: ABC12345

Resultado esperado en v1.0:

El sistema permite registrar al cliente aunque el telefono contenga letras.

### Problema identificado

El campo telefono no verifica que los datos ingresados sean exclusivamente numericos.

Este comportamiento debera corregirse mediante una validacion en JavaScript.
