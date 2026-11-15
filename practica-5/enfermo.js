
function procesarCompra(productos, cliente) {
  let total = 0;
  let descuento = 0;
  let resultado = {};

  if (productos && productos.length > 0) {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].precio > 0 && productos[i].cantidad > 0) {
        total = total + productos[i].precio * productos[i].cantidad;
      }
    }

    if (cliente === "frecuente") {
      if (total > 1000) {
        descuento = total * 0.10;
      } else {
        descuento = total * 0.05;
      }
    } else {
      if (total > 1000) {
        descuento = total * 0.03;
      } else {
        descuento = 0;
      }
    }

    total = total - descuento;
    let impuesto = total * 0.15;
    total = total + impuesto;

    resultado.total = Math.round(total * 100) / 100;
    resultado.descuento = Math.round(descuento * 100) / 100;
    resultado.impuesto = Math.round(impuesto * 100) / 100;
    resultado.mensaje = "Compra procesada";
  } else {
    resultado.total = 0;
    resultado.descuento = 0;
    resultado.impuesto = 0;
    resultado.mensaje = "Sin productos";
  }

  console.log(resultado.mensaje);
  return resultado;
}

module.exports = { procesarCompra };
