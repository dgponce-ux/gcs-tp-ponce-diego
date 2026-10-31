// Se importa la funcion que se va a probar.
const validarTelefono = require("../src/script.js");

// Se importa assert para comprobar los resultados.
const assert = require("node:assert/strict");

// Prueba 1: Telefono con solamente numeros.
assert.equal(validarTelefono("2804123456"), true);
console.log("Prueba 1: Telefono numerico - OK");

// Prueba 2: Telefono con letras.
assert.equal(validarTelefono("ABC12345"), false);
console.log("Prueba 2: Telefono con letras - OK");

// Prueba 3: Telefono con numeros y letras.
assert.equal(validarTelefono("280ABC123"), false);
console.log("Prueba 3: Telefono alfanumerico - OK");

// Prueba 4: Telefono con espacios.
assert.equal(validarTelefono("280 4123456"), false);
console.log("Prueba 4: Telefono con espacios - OK");

// Prueba 5: Telefono con caracteres especiales.
assert.equal(validarTelefono("280-4123456"), false);
console.log("Prueba 5: Caracteres especiales - OK");

// Prueba 6: Telefono vacio.
assert.equal(validarTelefono(""), false);
console.log("Prueba 6: Telefono vacio - OK");

console.log("\nTodas las pruebas finalizaron correctamente.");
