
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


 // Test 3: Cero dias vencidos
test('no aplica mora si tiene cero dias vencidos', () => {
  // Arrange
  const monto = 1000;
  const diasVencidos = 0;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(resultado, 0);
});

// Test 4: Monto igual a cero
test('devuelve cero si el monto es cero', () => {
  // Arrange
  const monto = 0;
  const diasVencidos = 5;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(resultado, 0);
});

// Test 5: Dias negativos
test('no aplica mora si los dias son negativos', () => {
  // Arrange
  const monto = 500;
  const diasVencidos = -2;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(resultado, 0);
});

// Test 6: Dias no numericos
test('rechaza dias vencidos no numericos', () => {
  // Arrange
  const monto = 500;
  const diasVencidos = 'cinco';
  let mensajeError = '';

  // Act
  try {
    calcularMora(monto, diasVencidos);
  } catch (error) {
    mensajeError = error.message;
  }

  // Assert
  assertEqual(
    mensajeError,
    'El monto y los días deben ser números válidos'
  );
});
