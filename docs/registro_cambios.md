
# Registro de Cambios

## Gestor de Clientes

### Elementos de Configuracion del Software (ECS)

Los siguientes archivos forman parte del control de configuracion del proyecto:

| Elemento | Descripcion |
|---|---|
| src/index.html | Interfaz del sistema |
| src/script.js | Logica de registro y validacion de clientes |
| tests/test_validacion.js | Pruebas automaticas de validacion |
| docs/README.md | Descripcion del proyecto |
| docs/manual_usuario.md | Manual de uso |
| docs/manual_tecnico.md | Documentacion tecnica |
| docs/plan_pruebas.md | Casos de prueba |
| docs/registro_cambios.md | Historial de modificaciones |
| .gitignore | Archivos excluidos del repositorio |
| README.md | Presentacion del repositorio |

### Historial de versiones

| Version | Fecha | Ticket | Descripcion | Responsable |
|---|---|---|---|---|
| v1.0 | 31/10/2026 | - | Version inicial del Gestor de Clientes | Diego Ponce |
| v1.1 | 31/10/2026 | #101 | Validacion del campo telefono | Diego Ponce |

### Linea base v1.0

La version v1.0 representa el estado inicial del sistema.

Esta version permite registrar clientes, pero no valida que el telefono contenga solamente numeros.

Se establecio como linea base para controlar y documentar las modificaciones posteriores.

### Cambio solicitado - Ticket #101

El cliente reporto que el campo telefono permitia ingresar letras.

El problema fue registrado en GitHub mediante el Issue #1, identificado con el titulo "Ticket #101 - Validar formato de telefono".

### Implementacion del cambio

Se incorporo la funcion validarTelefono() en el archivo src/script.js.

Esta funcion utiliza una expresion regular para comprobar que el telefono contenga solamente numeros.

Si el telefono contiene letras, espacios o caracteres especiales, el sistema muestra una alerta y evita registrar al cliente.

### Elementos modificados

- src/script.js
- tests/test_validacion.js
- docs/manual_usuario.md
- docs/manual_tecnico.md
- docs/plan_pruebas.md
- docs/registro_cambios.md

### Verificacion del cambio

Se realizaron pruebas manuales desde el navegador y 6 pruebas automaticas utilizando Node.js.

Todas las pruebas realizadas finalizaron correctamente.

### Estado de la version v1.1

Correccion implementada y verificada.

Pendiente de integracion a la rama main y liberacion de la version estable v1.1.

### Responsable

Diego Ponce
