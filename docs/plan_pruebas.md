
# Plan de Pruebas

## Gestor de Clientes - Version 1.1

### Objetivo

Verificar que el sistema registre correctamente los clientes y que el campo telefono acepte solamente numeros.

### Pruebas manuales

#### Caso 1: Telefono con letras

Nombre: Diego Ponce

Telefono: ABC12345

Resultado esperado: El sistema debe rechazar el registro y mostrar una alerta.

Resultado obtenido: Correcto.

#### Caso 2: Telefono numerico

Nombre: Diego Ponce

Telefono: 2804123456

Resultado esperado: El sistema debe registrar al cliente.

Resultado obtenido: Correcto.

### Pruebas automaticas

Se implementaron 6 pruebas utilizando Node.js y assert.

| Prueba | Datos | Resultado esperado | Estado |
|---|---|---|---|
| 1 | 2804123456 | true | OK |
| 2 | ABC12345 | false | OK |
| 3 | 280ABC123 | false | OK |
| 4 | 280 4123456 | false | OK |
| 5 | 280-4123456 | false | OK |
| 6 | Cadena vacia | false | OK |

### Ejecucion de las pruebas

Para ejecutar las pruebas automaticas se utiliza:

```powershell
node tests/test_validacion.js
```

### Resultados

Las 6 pruebas automaticas finalizaron correctamente.

Tambien se comprobo manualmente que el sistema rechaza telefonos incorrectos y permite registrar telefonos numericos.

### Conclusion de las pruebas

La validacion implementada funciona correctamente para los casos evaluados.

El error reportado en el Ticket #101 fue corregido y verificado mediante pruebas manuales y automaticas.

### Responsable

Diego Ponce
