
const { calcularMora } = require('./fiados');

function test(nombre, fn) {
  try {
    fn();
    console.log(`PASS: ${nombre}`);
  } catch (error) {
    console.error(`FAIL: ${nombre} - ${error.message}`);
    process.exitCode = 1;
  }
}

function assertEqual(actual, esperado) {
  if (actual !== esperado) {
    throw new Error(`Esperado: ${esperado}, recibido: ${actual}`);
  }
}

// Test 1: Camino feliz
test('calcula 5% de mora para un fiado vencido', () => {
  // Arrange
  const monto = 1000;
  const diasVencidos = 5;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(resultado, 50);
});

// Test 2: Caso borde - monto negativo

test('rechaza un monto negativo', () => {
  // Arrange
  const monto = -100;
  const diasVencidos = 5;
  let lanzoErrorCorrecto = false;

  // Act
  try {
    calcularMora(monto, diasVencidos);
  } catch (error) {
    lanzoErrorCorrecto =
      error.message === 'El monto no puede ser negativo';
  }

  // Assert
  assertEqual(lanzoErrorCorrecto, true);
});
