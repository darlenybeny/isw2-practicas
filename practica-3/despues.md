

\# Práctica 3 — Código después del refactoring



\## Aplicación de SOLID: S y D



```javascript

class ValidadorStock {

&#x20; validar(productos) {

&#x20;   for (const p of productos) {

&#x20;     if (p.cantidad > p.stock) throw Error('Sin stock');

&#x20;   }

&#x20; }

}



class CalculadoraTotal {

&#x20; calcular(productos) {

&#x20;   let subtotal = 0;

&#x20;   for (const p of productos) subtotal += p.precio \* p.cantidad;

&#x20;   return subtotal \* 1.15;

&#x20; }

}



class Pedido {

&#x20; constructor(validador, calculadora, repositorio, impresora, notificador) {

&#x20;   this.validador = validador;

&#x20;   this.calculadora = calculadora;

&#x20;   this.repositorio = repositorio;

&#x20;   this.impresora = impresora;

&#x20;   this.notificador = notificador;

&#x20; }



&#x20; procesar(productos, cliente) {

&#x20;   this.validador.validar(productos);

&#x20;   const total = this.calculadora.calcular(productos);

&#x20;   this.repositorio.guardar({ cliente, productos, total });

&#x20;   this.impresora.imprimir(`Ticket: L. ${total}`);

&#x20;   this.notificador.enviar(cliente.telefono, `Total: L. ${total}`);

&#x20;   return total;

&#x20; }

}

```



\## Explicación



\- \*\*S — Responsabilidad única:\*\* la validación de stock y el cálculo del total se separaron en clases especializadas. Pedido coordina el proceso.

\- \*\*D — Inversión de dependencias:\*\* Pedido recibe un repositorio y un notificador desde el exterior, en lugar de depender directamente de servicios concretos. Estos colaboradores deben cumplir los contratos guardar() y enviar().

\- Se conserva el flujo original: validar, calcular ISV, guardar, imprimir y notificar.





&#x20; 

