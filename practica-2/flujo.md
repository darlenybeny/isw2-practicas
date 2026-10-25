GitFlow usa varias ramas que duran mucho tiempo: una para desarrollo, otras para cada funcionalidad, otras para preparar versiones y otras para arreglos urgentes. Funciona bien cuando hay lanzamientos planificados y varias versiones conviviendo. Trunk-Based es lo contrario: cada persona sube cambios pequeños a la rama principal varias veces al día, y se apoya en pruebas automáticas para que nada se rompa. El problema de GitFlow es que es más enredado y las ramas se desincronizan fácilmente; el de Trunk-Based es que exige disciplina y buenas pruebas automáticas.



Para una app web usaría Trunk-Based. La razón es sencilla: en una app web todo el mundo usa siempre la última versión, no hay que mantener versiones viejas conviviendo. GitFlow está pensado justo para eso, para software que se instala y tiene versiones distintas (como una app de celular o un programa de escritorio), así que en la web solo agrega trabajo extra. Trunk-Based, con pruebas automáticas y la posibilidad de activar o desactivar funciones sin volver a desplegar, encaja mejor con el ritmo rápido de una app web.



Ejemplo práctico - BlossomApp: app realizada en IS1



En un proyecto como BlossomApp, donde desarrollamos funcionalidades como el catálogo, el carrito y los pedidos, utilizaría trunk-based development para integrar mejoras pequeñas mediante ramas de corta duración. Antes de fusionar los cambios, revisaría que las funcionalidades existentes sigan trabajando correctamente. Esto ayudaría a mantener estable la aplicación mientras el equipo continúa desarrollando.

