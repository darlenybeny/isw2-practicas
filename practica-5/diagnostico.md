# Práctica 5 — Clínica de código completa

## 1. Introducción

La presente práctica tiene como objetivo aplicar los conocimientos adquiridos en los módulos de Clean Code, Git, SOLID y Testing mediante la refactorización de una función de procesamiento de compras.

Se utilizó como ejemplo un sistema de ventas de Mini Super Michelle, donde se calculan subtotales, descuentos e impuestos.

## 2. Diagnóstico del código original

| Problema identificado | Principio violado | Refactor aplicado |
|---|---|---|
| Variables con nombres poco descriptivos (`p`, `t`, `d`) | **Principio 1:** El código se escribe para humanos | Se reemplazaron por `productos`, `total` y `descuento`. |
| Números mágicos en descuentos e impuestos | **Principio 1:** El código se escribe para humanos | Se crearon constantes descriptivas para los porcentajes, el límite de descuento y el redondeo. |
| Condicional principal con anidación innecesaria | **Principio 5:** Simple gana (KISS) | Se aplicó Early Return para reducir la anidación. |
| Cálculo de descuentos mezclado con el procesamiento de compras | **Principio 2:** Una función, una responsabilidad | Se extrajo la función `calcularDescuento()`. |
| Cálculo de impuestos dentro de la función principal | **Principio 2:** Una función, una responsabilidad | Se extrajo la función `calcularImpuesto()`. |

## 3. Principios adicionales aplicados

**Principio 6 — Sin red de seguridad no hay cambio.**

Se implementaron pruebas automatizadas antes de comenzar la refactorización. Después de cada modificación se ejecutaron nuevamente para comprobar que el comportamiento esperado se mantenía.

**Principio 7 — Integrá seguido y en pasos pequeños.**

Se realizaron cinco refactorizaciones independientes, cada una registrada mediante un commit convencional. Esto permitió mantener un historial verificable de los cambios.

**Principio 12 — La IA propone, el ingeniero dispone.**

Se utilizó inteligencia artificial como apoyo durante el desarrollo, pero los cambios fueron revisados y ejecutados en el entorno de trabajo, comprobando los resultados mediante pruebas.

## 4. Metodología

1. Se creó una función con problemas intencionales de diseño.
2. Se escribieron pruebas automatizadas del comportamiento inicial.
3. Se ejecutaron las pruebas antes de modificar el código.
4. Se realizaron cinco refactorizaciones incrementales.
5. Se ejecutaron las pruebas después de cada cambio.
6. Se registraron las mejoras mediante Conventional Commits.
7. Se recuperó la versión original y se conservó la versión refactorizada.
8. Se compararon los resultados de ambas versiones.

## 5. Resultados de las pruebas

Se utilizó Node.js con el módulo `node:assert/strict`.

| Prueba | Resultado |
|---|---|
| Compra de cliente frecuente | PASS |
| Compra sin productos | PASS |
| Compra de cliente normal | PASS |
| Comparación del comportamiento de ambas versiones | PASS |

**Resultado: 4 pruebas exitosas y 0 fallidas.**

La prueba comparativa evaluó cinco escenarios de compra y verificó que ambas versiones devolvieran los mismos resultados.

## 6. Historial de commits

| Commit | Descripción |
|---|---|
| `b469d5b` | Establecer comportamiento inicial de compras |
| `f9cdf3d` | Mejorar nombres de variables |
| `df5c96e` | Reemplazar números mágicos por constantes |
| `7b35bc5` | Aplicar Early Return |
| `4710455` | Extraer cálculo de descuentos |
| `51780a1` | Extraer cálculo de impuestos |

Se registraron seis commits: uno inicial de pruebas y cinco correspondientes a refactorizaciones.

## 7. Conclusiones

La práctica permitió demostrar que la refactorización mejora la estructura interna del código sin alterar su comportamiento esperado.

La utilización de nombres descriptivos, constantes y funciones con responsabilidades diferenciadas facilitó la comprensión y el mantenimiento del sistema.

Las pruebas automatizadas proporcionaron una red de seguridad, mientras que Git permitió documentar de manera incremental las mejoras realizadas.

## 8. Declaración de uso de inteligencia artificial

Se utilizó ChatGPT como herramienta de apoyo para explicar conceptos de Clean Code, SOLID y Testing, proponer refactorizaciones y orientar la documentación.

El código fue ejecutado en Visual Studio Code y los cambios se verificaron mediante pruebas automatizadas y el historial de Git.

La responsabilidad de revisar, comprender y validar los resultados corresponde al desarrollador.