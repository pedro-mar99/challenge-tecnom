# Boxes

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Características

- **Responsivo**: Para dispositivos móviles y pantallas de escritorio.
- **Modularidad**: Componentes y servicios organizados por módulos.
- **Enrutamiento**: Dividido en rutas internas (internal.routes) y para APIs externas (api.routes).
- **Lazy Loading**: Para mejorar el rendimiento (no considero necesario para el tipo de proyecto, sin embargo es buena práctica aplicarlo).
- **Skeleton Loading**: Se generó un componente Skeleton que contemple aquellas partes de la vista que se repiten para mantener el código mas limpio.
- **Patrones de Diseño**: Se implementó *Publish and Subscribe* por ejemplo, para manejo de eventos por medio de Observables.
- **Principios SOLID**: Se tuvieron en cuenta a la hora de generar los distintos componentes.

## Arquitectura

El proyecto sigue una estructura modular:

- **src/app**: Contiene todos módulos, componentes, servicios, constantes, etc.
  - `data/`: Servicios, interfaces y enrutamiento.
  - `layout/`: Componentes que representan el esqueleto del proyecto.
  - `modules/`: Componentes principales.
- **assets/**: Contiene los iconos.

## Responsividad

Se hizo foco en un diseño para dispositivos móbiles, ya que las capturas de pantalla tenian ese formato.
Sin embargo, se tuvo en cuenta el aumento de tamaño de los elementos para pantallas de escritorio.

## Aclaraciones

- Se agrego el archivo *proxy.config.json* dentro de */src* ya que tuve problemas para conectarme a la api, especificamente, problemas de CORS Policy.
- Para las respuestas de la api que devolvian valores nulos, se agrego en algunos casos, *desconocido*, para al menos rellenar el espacio.