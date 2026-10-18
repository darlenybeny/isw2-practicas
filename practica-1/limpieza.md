
# Práctica 1: Clean Code

**Proyecto:** BlossomApp  
**Lenguaje:** Dart  
**Tecnología:** Flutter y Firebase

## 1. Código original

Fragmento de 17 líneas del archivo payment_screen.dart:

```dart
if (numeroTarjetaController.text.trim().isEmpty ||
    fechaController.text.trim().isEmpty ||
    cvvController.text.trim().isEmpty) {
  ScaffoldMessenger.of(context).showSnackBar(
    const SnackBar(
      content: Text('Completa los datos de pago'),
    ),
  );
  return;
}

final usuario = FirebaseAuth.instance.currentUser;

if (usuario == null) {
  ScaffoldMessenger.of(context).showSnackBar(
    const SnackBar(
      content: Text('No hay un usuario autenticado'),
    ),
  );
```

## 2. Code smells identificados

**Código duplicado (Duplicated Code):**
La estructura para mostrar mensajes con SnackBar
se repite en diferentes validaciones.

**Responsabilidades múltiples:**
La función _confirmarPago() realiza validaciones,
consulta la autenticación, registra pedidos y
gestiona la navegación.

**Manejo de errores poco informativo:**
El bloque catch muestra un mensaje genérico,
pero no registra detalles para diagnosticar
el problema.

## 3. Código refactorizado

Se extrae la lógica de mostrar mensajes a una
función reutilizable:

```dart
void _mostrarMensaje(String mensaje) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text(mensaje)),
  );
}
```

Los bloques de validación pueden utilizarla:

```dart
if (numeroTarjetaController.text.trim().isEmpty ||
    fechaController.text.trim().isEmpty ||
    cvvController.text.trim().isEmpty) {
  _mostrarMensaje('Completa los datos de pago');
  return;
}

final usuario = FirebaseAuth.instance.currentUser;

if (usuario == null) {
  _mostrarMensaje('No hay un usuario autenticado');
  return;
}
```

## 4. Reflexión

Al revisar BlossomApp identifiqué que un programa
puede funcionar correctamente y aun así tener
oportunidades de mejora en su estructura.

La extracción de una función para mostrar mensajes
permite reducir la duplicación y facilita el
mantenimiento. Además, separar responsabilidades
ayudaría a que el código sea más fácil de probar.

La refactorización debe conservar el comportamiento
original de la aplicación. Por ello, antes y
después de realizar cambios es importante ejecutar
pruebas que permitan verificar su funcionamiento.
  
