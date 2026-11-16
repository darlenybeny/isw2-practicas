
const LIMITE_DESCUENTO = 1000;
const DESCUENTO_FRECUENTE_ALTO = 0.10;
const DESCUENTO_FRECUENTE_BAJO = 0.05;
const DESCUENTO_NORMAL_ALTO = 0.03;
const TASA_IMPUESTO = 0.15;
const FACTOR_REDONDEO = 100;

function procesarCompra(productos, cliente) {
  let total = 0;
  let descuento = 0;
  let resultado = {};

  // Early Return: salir si no hay productos
  if (!productos || productos.length === 0) {
    resultado.total = 0;
    resultado.descuento = 0;
    resultado.impuesto = 0;
    resultado.mensaje = "Sin productos";

    console.log(resultado.mensaje);
    return resultado;
  }

  // Calcular subtotal
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 0 && productos[i].cantidad > 0) {
      total = total + productos[i].precio * productos[i].cantidad;
    }
  }

  // Calcular descuentos
  if (cliente === "frecuente") {
    if (total > LIMITE_DESCUENTO) {
      descuento = total * DESCUENTO_FRECUENTE_ALTO;
    } else {
      descuento = total * DESCUENTO_FRECUENTE_BAJO;
    }
  } else {
    if (total > LIMITE_DESCUENTO) {
      descuento = total * DESCUENTO_NORMAL_ALTO;
    } else {
      descuento = 0;
    }
  }

  // Calcular impuesto
  total = total - descuento;
  let impuesto = total * TASA_IMPUESTO;
  total = total + impuesto;

  resultado.total =
    Math.round(total * FACTOR_REDONDEO) / FACTOR_REDONDEO;
  resultado.descuento =
    Math.round(descuento * FACTOR_REDONDEO) / FACTOR_REDONDEO;
  resultado.impuesto =
    Math.round(impuesto * FACTOR_REDONDEO) / FACTOR_REDONDEO;
  resultado.mensaje = "Compra procesada";

  console.log(resultado.mensaje);
  return resultado;
}

module.exports = { procesarCompra };
