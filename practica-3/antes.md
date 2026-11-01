

\# Práctica 3 — Código antes del refactoring



\## Clase Pedido original



```javascript

class Pedido {

&#x20; procesar(productos, cliente) {

&#x20;   for (const p of productos) {

&#x20;     if (p.cantidad > p.stock) throw Error('Sin stock');

&#x20;   }

&#x20;   let total = 0;

&#x20;   for (const p of productos) {

&#x20;     total += p.precio \* p.cantidad;

&#x20;   }

&#x20;   total = total \* 1.15;

&#x20;   baseDatos.guardar({ cliente, productos, total });

&#x20;   impresora.imprimir(`Ticket: L. ${total}`);

&#x20;   whatsapp.enviar(cliente.telefono, `Total: L. ${total}`);

&#x20;   return total;

&#x20; }

}

```



Este ejemplo fue elaborado para representar la clase descrita en las instrucciones del reto. Las dependencias externas son simuladas y no corresponden a una implementación funcional.

&#x20; 

