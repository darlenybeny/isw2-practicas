
function calcularMora(monto, diasVencidos) {
  // Validar que ambos valores sean números
  if (!Number.isFinite(monto) ||
      !Number.isFinite(diasVencidos)) {
    throw new Error(
      'El monto y los días deben ser números válidos'
    );
  }

  // Rechazar montos negativos
  if (monto < 0) {
    throw new Error('El monto no puede ser negativo');
  }

  // Si no está vencido, no se aplica mora
  if (diasVencidos <= 0) {
    return 0;
  }

  // Calcular el 5% de mora
  return monto * 0.05;
}

module.exports = { calcularMora };
