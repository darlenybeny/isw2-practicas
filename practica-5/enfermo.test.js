
const { procesarCompra } = require("./enfermo");
const assert = require("node:assert/strict");

function probar(nombre, ejecutar) {
  try {
    ejecutar();
    console.log("✅ PASS:", nombre);
  } catch (error) {
    console.error("❌ FAIL:", nombre);
    throw error;
  }
}

probar("Compra de cliente frecuente", () => {
  const productos = [
    { precio: 1200, cantidad: 1 }
  ];

  const resultado = procesarCompra(productos, "frecuente");

  assert.equal(resultado.total, 1242);
  assert.equal(resultado.descuento, 120);
  assert.equal(resultado.impuesto, 162);
});

probar("Compra sin productos", () => {
  const resultado = procesarCompra([], "normal");

  assert.equal(resultado.total, 0);
  assert.equal(resultado.descuento, 0);
  assert.equal(resultado.impuesto, 0);
  assert.equal(resultado.mensaje, "Sin productos");
});

probar("Compra de cliente normal", () => {
  const productos = [
    { precio: 500, cantidad: 1 }
  ];

  const resultado = procesarCompra(productos, "normal");

  assert.equal(resultado.total, 575);
  assert.equal(resultado.descuento, 0);
  assert.equal(resultado.impuesto, 75);
});
