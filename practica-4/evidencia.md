\# Práctica 4 - Primera suite de tests



\## Objetivo



Implementar una calculadora de mora para fiados utilizando JavaScript puro y aplicar el ciclo TDD (Red, Green, Refactor).



\## Pruebas realizadas



Se desarrollaron seis pruebas unitarias utilizando el patrón AAA (Arrange, Act, Assert):



1\. Calcular el 5 % de mora para un fiado vencido.

2\. Rechazar un monto negativo.

3\. No aplicar mora cuando hay cero días vencidos.

4\. Devolver cero cuando el monto es cero.

5\. No aplicar mora cuando los días son negativos.

6\. Rechazar días vencidos no numéricos.



\## Evidencia de ejecución



Comando utilizado:



`node fiados.test.js`



\*\*Resultado:\*\* 6 pruebas ejecutadas, 6 aprobadas y 0 fallidas.



!\[Captura de las seis pruebas aprobadas](captura-tests.png)



\## Evidencia de TDD



\*\*Fase RED:\*\* Se escribieron y ejecutaron dos pruebas antes de implementar la función. Ambas fallaron.



Commit: `58b52f3`



\*\*Fase GREEN:\*\* Se implementó la función `calcularMora()` y se completó la suite de seis pruebas, todas aprobadas.



Commit: `3b9fa38`



\## Conclusión



La práctica permitió aplicar pruebas unitarias sin frameworks externos y comprobar distintos comportamientos de una función, incluyendo el camino feliz y casos borde. También permitió comprender la importancia de escribir pruebas antes de implementar una funcionalidad y conservar evidencia del proceso mediante Git.

