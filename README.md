# HUB 2.º DS · A

Portal de repaso de los **4 módulos de 2.º año de Desarrollo de Software**
(curso 2DS-2025 A, profesor Francisco Arcides Canales Sorto).
HTML, CSS y JavaScript puro. Sin frameworks. Listo para GitHub Pages.

**Publicado:** https://marjo6.github.io/hub-2do/

## Qué incluye

- Portada con identidad propia y navegación.
- Los 4 módulos reales del año, pintados desde `data/modulos.js`.
- Ficha por módulo: resumen, periodo, promedio, aprendizajes, actividades reales con fecha y nota, instrumentos, programas, herramientas, recursos, evidencias y quiz.
- Buscador en tiempo real y filtros por área.
- Progreso del repaso guardado en el navegador (`localStorage`).
- Quiz con retroalimentación inmediata.
- Modo claro y oscuro.
- Diseño responsive y navegación por teclado (`/` para buscar, `Esc` para cerrar).

## Contenido

| Módulo | Periodo | Eje |
| --- | --- | --- |
| Módulo 1 · Bases de datos | feb – may 2025 | Access, SQL Server, modelo entidad-relación |
| Módulo 2 · Diseño de arquitectura de software | jun – jul 2025 | SQL, Linux, Git/GitHub, nivelación C# |
| Módulo 3 · Programación orientada a objetos | jul – nov 2025 | UML, C#, métodos, clases y objetos, Windows Forms |
| Módulo 4 · Proyecto innovador | sept – nov 2025 | Proyecto Windows Form, CRUD, feria de logros |

Los enlaces a guías y evidencias apuntan a Google Drive y Classroom: para abrirlos
hay que iniciar sesión con la cuenta con la que se entregaron los trabajos.

## Estructura

```
hub-2do/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── data/
│   └── modulos.js      ← el único archivo que se edita para cambiar contenido
└── README.md
```

## Cómo agregar o editar un módulo

Abre `data/modulos.js` y edita el arreglo `window.MODULOS`.
Cada módulo es un objeto con esta forma:

```js
{
  id: "bases-datos",            // único, sin espacios
  nombre: "Módulo 1 · Bases de datos",
  docente: "Prof. Francisco Arcides Canales Sorto",
  area: "Bases de datos",       // se usa para los filtros
  periodo: "feb – may 2025",
  nota: "Promedio de Módulo 1 + recuperación",
  resumen: "2 o 3 líneas con palabras propias.",
  aprendizajes: ["...", "...", "..."],
  instrumentos: ["Guía...", "Rúbrica...", "Lista de cotejo..."],
  programas: ["Microsoft Access 2013", "SQL Server"],
  herramientas: ["SQL", "Modelo entidad-relación"],
  actividades: [
    { nombre: "Práctica 3", fecha: "18 mar 2025", nota: "10/10" }
  ],
  recursos: [
    { nombre: "Guía Access 2013", url: "https://drive.google.com/..." }
  ],
  evidencias: [
    { nombre: "Biblioteca_10266464.accdb", url: "https://drive.google.com/..." }
  ],
  quiz: [
    {
      p: "¿Pregunta?",
      opciones: ["A", "B", "C", "D"],
      correcta: 1,               // índice de la opción correcta (empieza en 0)
      explica: "Por qué esa es la respuesta."
    }
  ]
}
```

Las secciones de actividades, recursos y evidencias se ocultan solas si el
arreglo está vacío, así que puedes añadir módulos nuevos sin tocar el HTML.

## Verlo en local

Con la extensión **Live Server** de VS Code: clic derecho en `index.html` →
*Open with Live Server*.

O con Python:

```bash
python -m http.server 8000
```

Y abre `http://localhost:8000`.

## Publicarlo en GitHub Pages

1. Crea un repositorio **público** en GitHub.
2. Sube el contenido de esta carpeta (no la carpeta, su contenido):

```bash
git init
git add .
git commit -m "feat: portal de repaso 2.º DS"
git branch -M main
git remote add origin https://github.com/USUARIO/REPO.git
git push -u origin main
```

3. En el repositorio: **Settings → Pages**.
4. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
5. Espera un par de minutos y abre la URL `https://USUARIO.github.io/REPO/`.

> GitHub Pages distingue mayúsculas y minúsculas: respeta los nombres
> `css/`, `js/` y `data/`.

## Créditos

Contenido extraído de Google Classroom, curso **2DS-2025 A**, del profesor
**Francisco Arcides Canales Sorto**. Portal armado como repaso del año 2025.
