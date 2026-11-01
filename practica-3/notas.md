\# Práctica 3 — Justificación del refactoring SOLID



\## S — Single Responsibility Principle (Responsabilidad Única)



1\. La clase original `Pedido` tenía demasiadas responsabilidades dentro de un solo método.

2\. Separé la validación del inventario en una clase llamada `ValidadorStock`.

3\. Creé `CalculadoraTotal` para que el cálculo del subtotal y del ISV tenga su propia responsabilidad.

4\. Ahora `Pedido` se encarga principalmente de coordinar el procesamiento de la compra.

5\. Este cambio facilita el mantenimiento y las pruebas porque cada componente tiene una responsabilidad definida.



\## D — Dependency Inversion Principle (Inversión de Dependencias)



1\. Originalmente, `Pedido` utilizaba directamente los servicios de base de datos y WhatsApp.

2\. Modifiqué el constructor para recibir las dependencias necesarias desde el exterior.

3\. El repositorio debe cumplir el contrato `guardar()` y el notificador el contrato `enviar()`.

4\. Esto permite sustituir servicios reales por implementaciones simuladas durante las pruebas.

5\. Así reduzco el acoplamiento de `Pedido` con tecnologías concretas y facilito futuros cambios.



\## Relación con el decálogo de Clean Code



\- \*\*Principio 2 — Una función, una responsabilidad:\*\* Se aplicó al separar la validación del stock y el cálculo del total en componentes independientes, evitando que un solo método concentre todas las tareas.



\- \*\*Principio 4 — No te repitas (DRY):\*\* Se centralizó el cálculo del total en `CalculadoraTotal`, permitiendo reutilizar esta lógica sin duplicarla en otras partes de la aplicación.



\- \*\*Principio 5 — Simple gana (KISS) y no lo vas a necesitar (YAGNI):\*\* Se mantuvo un diseño sencillo, creando únicamente los componentes necesarios para separar las responsabilidades existentes.



\- \*\*Principio 9 — Diseñá para el cambio:\*\* Se redujo el acoplamiento de `Pedido` con los servicios externos mediante inyección de dependencias y contratos, facilitando sustituir implementaciones sin modificar la lógica principal.



\### Principios SOLID aplicados



\- \*\*S — Single Responsibility Principle:\*\* Relacionado principalmente con el principio 2 del decálogo.

\- \*\*D — Dependency Inversion Principle:\*\* Relacionado principalmente con el principio 9 del decálogo.

