
function procesarCompra(p, cliente) {
  let t = 0;
  let d = 0;
  let resultado = {};

  if (p && p.length > 0) {
    for (let i = 0; i < p.length; i++) {
      if (p[i].precio > 0 && p[i].cantidad > 0) {
        t = t + p[i].precio * p[i].cantidad;
      }
    }

    if (cliente === "frecuente") {
      if (t > 1000) {
        d = t * 0.10;
      } else {
        d = t * 0.05;
      }
    } else {
      if (t > 1000) {
        d = t * 0.03;
      } else {
        d = 0;
      }
    }

    t = t - d;
    let impuesto = t * 0.15;
    t = t + impuesto;

    resultado.total = Math.round(t * 100) / 100;
    resultado.descuento = Math.round(d * 100) / 100;
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
