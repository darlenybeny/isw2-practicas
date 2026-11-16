
const assert = require("node:assert/strict");

const { procesarCompra: procesarCompraEnferma } =
  require("./enfermo");

const { procesarCompra: procesarCompraSana } =
  require("./sano");

  const procesarCompra = procesarCompraEnferma;

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

probar("Ambas versiones mantienen el comportamiento", () => {
  const escenarios = [
    { productos: [], cliente: "normal" },
    { productos: [{ precio: 500, cantidad: 1 }], cliente: "normal" },
    { productos: [{ precio: 1200, cantidad: 1 }], cliente: "frecuente" },
    { productos: [{ precio: 1500, cantidad: 1 }], cliente: "normal" },
    { productos: [{ precio: 800, cantidad: 1 }], cliente: "frecuente" }
  ];

  for (const escenario of escenarios) {
    const resultadoOriginal = procesarCompraEnferma(
      escenario.productos,
      escenario.cliente
    );

    const resultadoRefactorizado = procesarCompraSana(
      escenario.productos,
      escenario.cliente
    );

    assert.deepEqual(resultadoRefactorizado, resultadoOriginal);
  }
});
