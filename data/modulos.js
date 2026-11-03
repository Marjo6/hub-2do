/* ============================================================
   HUB 2.º DS · A — Datos reales del año
   ------------------------------------------------------------
   Curso: 2DS-2025 A · Prof. Francisco Arcides Canales Sorto
   Fuente: Google Classroom (26 trabajos de los módulos 1 a 4).

   Este es el ÚNICO archivo que hay que editar para cambiar el
   contenido del portal. Cada objeto del arreglo es un módulo.

   Campos:
     id            texto corto sin espacios
     nombre        nombre del módulo
     docente       quién lo impartió
     area          para los filtros
     periodo       rango de fechas del módulo
     nota          referencia al promedio o material de notas
     resumen       2 o 3 líneas con palabras propias
     aprendizajes  3 o 4 cosas que aprendiste (arreglo)
     instrumentos  guías, rúbricas, listas de cotejo, exámenes
     programas     software que instalaste y usaste
     herramientas  lenguajes, librerías, frameworks, servicios
     actividades   [{ nombre, fecha, nota }] trabajos reales
     recursos      [{ nombre, url }] guías y documentación
     evidencias    [{ nombre, url }] trabajos entregados
     quiz          [{ p, opciones, correcta, explica }]
   ============================================================ */

window.MODULOS = [
  {
    id: "bases-datos",
    nombre: "Módulo 1 · Bases de datos",
    docente: "Prof. Francisco Arcides Canales Sorto",
    area: "Bases de datos",
    periodo: "feb – may 2025",
    nota: "Promedio de Módulo 1 + recuperación",
    resumen:
      "Empezamos por lo básico: qué es un dato, cómo se modela y cómo se guarda sin duplicarse. Creaste bases en Access y en SQL Server con tablas, llaves, relaciones, formularios y consultas, y cerraste con un proyecto de biblioteca escolar.",
    aprendizajes: [
      "Modelar un problema en tablas: entidades, atributos, llave primaria y llave foránea.",
      "Crear bases de datos en Access y en SQL Server, y consultarlas con SELECT.",
      "Aplicar normalización y modelo entidad-relación para evitar datos repetidos o huérfanos.",
      "Documentar el proceso con capturas y explicarlo en una evaluación dialogada."
    ],
    instrumentos: [
      "Guía Access 2013 (PDF)",
      "Ejercicios 1–10 de Access (PDF)",
      "Teoría sobre modelo entidad-relación (PDF)",
      "Rúbrica de la Práctica 4 (Google Sheets)"
    ],
    programas: [
      "Microsoft Access 2013",
      "SQL Server",
      "SQL Server Management Studio",
      "Microsoft Word"
    ],
    herramientas: [
      "Modelo entidad-relación",
      "Normalización",
      "SQL",
      "PL/SQL",
      "Access",
      "Backup y recuperación"
    ],
    actividades: [
      { nombre: "Capacitación «Administrador de base de datos»", fecha: "10 abr 2025", nota: "10/10" },
      { nombre: "Etapa de informarse", fecha: "13 mar 2025", nota: "8/10" },
      { nombre: "Práctica 2", fecha: "6 mar 2025", nota: "9/10" },
      { nombre: "Práctica 3", fecha: "18 mar 2025", nota: "10/10" },
      { nombre: "Etapa de Planificar y Ejecutar", fecha: "25 abr 2025", nota: "9.31/10" },
      { nombre: "Práctica 4", fecha: "7 abr 2025", nota: "10/10" },
      { nombre: "Actividad 3", fecha: "15 may 2025", nota: "10/10" },
      { nombre: "Autoevaluación módulo 1", fecha: "19 may 2025", nota: "7.4/100" },
      { nombre: "Recuperación de módulo 1", fecha: "31 may 2025", nota: "Entregada" },
      { nombre: "Promedio de Módulo 1", fecha: "19 may 2025", nota: "Material de notas" }
    ],
    recursos: [
      { nombre: "Guía Access 2013", url: "https://drive.google.com/file/d/1oExIJyI1YsjxgXj4GHW-stNDn2LuCaDk/view" },
      { nombre: "Ejercicios 1–10 Access", url: "https://drive.google.com/file/d/19zcfh4RS4E_wtl7lY89QEE1Sg_zpsfCZ/view" },
      { nombre: "Modelo entidad-relación", url: "https://drive.google.com/file/d/1FBq4W6gTMfhTZfHUCGM7mVzkCyRUpPTS/view" },
      { nombre: "Proyecto de biblioteca", url: "https://drive.google.com/file/d/1BUtaSpshvEb7p-HezGLyw5TVUXJvJDnm/view" },
      { nombre: "Rúbrica Práctica 4", url: "https://docs.google.com/spreadsheets/d/1akwncAIFjxGQyf6vXNr8Gg70_EnMzyWwia8ULMMxBWg/edit" },
      { nombre: "Ayuda de Microsoft Access", url: "https://support.microsoft.com/es-es/access" },
      { nombre: "Documentación de SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { nombre: "Fundación Slim · cursos", url: "https://capacitateparaelempleo.org/" }
    ],
    evidencias: [
      { nombre: "Biblioteca_10266464.accdb", url: "https://drive.google.com/file/d/1tsxtV029aYFhkmDHOePfQ5c2IB4JScNP/view" },
      { nombre: "Gimnasio_10266464.accdb", url: "https://drive.google.com/file/d/1QH4AhJRJPb5QygPnAWVAEg_9SzKpMTq5/view" },
      { nombre: "ContactosPersonales_10266464.accdb", url: "https://drive.google.com/file/d/1zupcZRWIH1TCAjKRjwuGupRcAEIN9jbB/view" },
      { nombre: "TurismoBolivia_10266464.accdb", url: "https://drive.google.com/file/d/1QrhvxVWTzJX0Fp6_EFVydA3unLu9d__h/view" },
      { nombre: "MiPrimeraBaseCS10266464.accdb", url: "https://drive.google.com/file/d/1MJhcWES80tAqxJdoildIGpVDoDn9_uN4/view" },
      { nombre: "PRACTICA 3.docx", url: "https://drive.google.com/file/d/1_K6r4MlnpXZUe-NFsfjyBSB7Nbt0n4s6/view" },
      { nombre: "PRACTICA 4 Solucion.docx", url: "https://drive.google.com/file/d/1B4uDN_lmact5uWZ0VCsqOrFUshCTQXQt/view" },
      { nombre: "Practica3.docx · Etapa de informarse", url: "https://drive.google.com/file/d/1KYsKN1jRFqqcDdDccBhAmfSuEl_YIaKo/view" },
      { nombre: "certificad.png · capacitación", url: "https://drive.google.com/file/d/1aI1GLxLxIzX3-DReWKaXBbH8N4T0NNz_/view" }
    ],
    quiz: [
      {
        p: "¿Qué identifica de forma única cada fila de una tabla?",
        opciones: [
          "La llave foránea",
          "La llave primaria",
          "El nombre de la tabla",
          "El último registro"
        ],
        correcta: 1,
        explica: "La llave primaria no se repite y no admite nulos; por eso identifica cada fila sin ambigüedad."
      },
      {
        p: "¿Qué protege una llave foránea?",
        opciones: [
          "Que la tabla se vea ordenada",
          "La integridad referencial entre dos tablas",
          "El tamaño de la base de datos",
          "La contraseña del gestor"
        ],
        correcta: 1,
        explica: "La llave foránea referencia la llave primaria de otra tabla y evita registros huérfanos."
      },
      {
        p: "¿Para qué sirve la normalización?",
        opciones: [
          "Para reducir la redundancia y evitar anomalías al guardar datos",
          "Para que la base pese más",
          "Para crear formularios bonitos",
          "Para cambiar el motor de base de datos"
        ],
        correcta: 0,
        explica: "Normalizar separa los datos en tablas relacionadas para no repetir información y evitar inconsistencias."
      }
    ]
  },
  {
    id: "arquitectura",
    nombre: "Módulo 2 · Diseño de arquitectura de software",
    docente: "Prof. Francisco Arcides Canales Sorto",
    area: "Arquitectura",
    periodo: "jun – jul 2025",
    nota: "Promedio de Módulo 2 + nivelación",
    resumen:
      "Pasaste de crear tablas a diseñar soluciones: consultas más complejas en SQL Server, comandos de Linux y GitHub para versionar, y una nivelación de C# en la Fundación Slim para llegar listo a la programación orientada a objetos.",
    aprendizajes: [
      "Escribir consultas SQL con filtros, orden, agrupación y combinación de tablas.",
      "Usar comandos de Linux y Git/GitHub para trabajar y versionar proyectos.",
      "Completar la nivelación de C# del curso «Programador en C#» (mínimo nivel 4).",
      "Documentar una práctica con capturas y explicar cada paso con palabras propias."
    ],
    instrumentos: [
      "Guía 3 (PDF) — consultas SQL",
      "guia-2.pdf — creación de bases de datos",
      "Comandos Linux es.pdf",
      "Rúbrica de seguimiento Recuperación 2DSA"
    ],
    programas: [
      "SQL Server",
      "SQL Server Management Studio",
      "Microsoft Access",
      "Git",
      "GitHub",
      "Visual Studio"
    ],
    herramientas: [
      "SQL",
      "Consultas y joins",
      "Linux",
      "Git",
      "GitHub",
      "C#"
    ],
    actividades: [
      { nombre: "Práctica 5 SQL · Creación de bases SQL", fecha: "26 jun 2025", nota: "9.6/10" },
      { nombre: "Actividad 4 · Comandos Linux para GitHub", fecha: "30 may 2025", nota: "10/100" },
      { nombre: "Práctica 6 · Creación de base de datos", fecha: "12 jul 2025", nota: "7/10" },
      { nombre: "Autoevaluación 6 · Creación de base de datos", fecha: "14 jul 2025", nota: "8.5/100" },
      { nombre: "Nivelación de módulo · Programador en C#", fecha: "29 jul 2025", nota: "7 puntos" },
      { nombre: "Promedio de Módulo 2", fecha: "14 jul 2025", nota: "Material de notas" }
    ],
    recursos: [
      { nombre: "Guía 3 · consultas SQL", url: "https://drive.google.com/file/d/1-b9ypdhnAkkM-1pvfbxYJhq89fatMlHy/view" },
      { nombre: "guia-2 · creación de BD", url: "https://drive.google.com/file/d/1sEqeGT-jsFqxmkWvb_ySoqqRtj66CvlC/view" },
      { nombre: "Comandos Linux es.pdf", url: "https://drive.google.com/file/d/1o3dmihehIzvUOmZ2RG8yqKjWAlpMfaG8/view" },
      { nombre: "01 · Primer programa en C#", url: "https://drive.google.com/file/d/1lXP0_2HvEa_VoMXQh5s9F_jHi-LhpQgU/view" },
      { nombre: "03 · Bases de la POO", url: "https://drive.google.com/file/d/1pkMsJE8GtyP8V2AuOx8BiHw10Xhnrbft/view" },
      { nombre: "W3Schools · SQL", url: "https://www.w3schools.com/sql/" },
      { nombre: "Pro Git (español)", url: "https://git-scm.com/book/es/v2" },
      { nombre: "GitHub Docs", url: "https://docs.github.com/es" }
    ],
    evidencias: [
      { nombre: "Guia2_10266464.zip", url: "https://drive.google.com/file/d/1-zwQ6vlCEWRNBu8cazVMCG50PJCW9-YD/view" },
      { nombre: "Queri.zip · consultas SQL", url: "https://drive.google.com/file/d/1cMekCsEcVUtDjdZZE9JOR_v5yL-9LXVc/view" },
      { nombre: "BaseDatos (2).zip", url: "https://drive.google.com/file/d/1aKz_s_qqeuxtuR8IMHdvROX6T44UVboQ/view" },
      { nombre: "Texto paralelo.docx", url: "https://drive.google.com/file/d/1aAG_gw4glP2W_ZysdRSidVsoT-PjFNX6/view" },
      { nombre: "word.docx · Comandos Linux", url: "https://drive.google.com/file/d/1wPlyBFJ_E_fLkY2GF2bmuQZGG2Ihykdm/view" },
      { nombre: "02 capitulo es.docx", url: "https://drive.google.com/file/d/16uLp-LfawaHUJ05impiRtXF9a49zB5og/view" }
    ],
    quiz: [
      {
        p: "¿Qué comando de Git guarda los cambios en el repositorio local?",
        opciones: ["git push", "git commit", "git clone", "git status"],
        correcta: 1,
        explica: "git commit crea una instantánea de los cambios preparados; git push los sube al repositorio remoto."
      },
      {
        p: "¿Qué cláusula agrupa filas para usar funciones como COUNT o SUM?",
        opciones: ["ORDER BY", "WHERE", "GROUP BY", "LIMIT"],
        correcta: 2,
        explica: "GROUP BY reúne filas con el mismo valor y permite aplicar funciones de agregación a cada grupo."
      },
      {
        p: "¿Qué hace git push?",
        opciones: [
          "Descarga cambios del repositorio remoto",
          "Sube los commits locales al repositorio remoto",
          "Borra el historial de commits",
          "Crea una rama nueva automáticamente"
        ],
        correcta: 1,
        explica: "git push envía los commits de tu rama local al repositorio remoto (por ejemplo, GitHub)."
      }
    ]
  },
  {
    id: "poo",
    nombre: "Módulo 3 · Programación orientada a objetos",
    docente: "Prof. Francisco Arcides Canales Sorto",
    area: "Programación",
    periodo: "jul – nov 2025",
    nota: "Promedio estimado de Módulo 3",
    resumen:
      "El corazón del año: pensaste el software con UML y lo construiste en C# con clases, objetos, métodos y Windows Forms. Cerraste con una práctica integradora de clases y objetos evaluada con rúbrica.",
    aprendizajes: [
      "Modelar clases, atributos, métodos y relaciones con diagramas UML en StarUML.",
      "Escribir métodos en C# y reutilizar lógica mediante clases y objetos.",
      "Construir interfaces de escritorio con Windows Forms y conectarlas a datos.",
      "Probar cada programa, registrar las corridas en el cuaderno y explicar el código."
    ],
    instrumentos: [
      "guia-2.pdf — UML y StarUML",
      "guia-1.pdf — métodos",
      "guia-5.pdf — Windows Forms",
      "guia-4-b.pdf — POO en Windows Forms",
      "guia-5 (2).pdf — clases y objetos",
      "Rúbricas de cada práctica (10 pts)"
    ],
    programas: [
      "StarUML",
      "Visual Studio",
      "SQL Server",
      "Microsoft Access",
      "Windows Forms"
    ],
    herramientas: [
      "UML",
      "C#",
      "POO",
      "Clases y objetos",
      "Métodos",
      "Windows Forms",
      "CRUD"
    ],
    actividades: [
      { nombre: "Práctica 7 · UML", fecha: "28 jul 2025", nota: "10/100" },
      { nombre: "Autoevaluación UML", fecha: "15 ago 2025", nota: "90/100" },
      { nombre: "Práctica 8 · Métodos POO", fecha: "21 ago 2025", nota: "10/10" },
      { nombre: "Autoevaluación práctica 8 · Métodos", fecha: "28 ago 2025", nota: "10/100" },
      { nombre: "Práctica 9 · Windows Form", fecha: "9 sept 2025", nota: "10/10" },
      { nombre: "Práctica 10 · POO en Windows Form", fecha: "7 oct 2025", nota: "10/10" },
      { nombre: "Práctica 11 · Clases y objetos", fecha: "6 nov 2025", nota: "9/10" },
      { nombre: "Promedio estimado de Módulo 3", fecha: "6 nov 2025", nota: "Material de notas" }
    ],
    recursos: [
      { nombre: "guia-2 · UML", url: "https://drive.google.com/file/d/13smUHGar4hSCBumamApVw3k3VmPp2PI-/view" },
      { nombre: "guia-1 · métodos", url: "https://drive.google.com/file/d/1C7_lF0h1Z-OIjJOLmKj88X2SSNNxHLuO/view" },
      { nombre: "guia-5 · Windows Forms", url: "https://drive.google.com/file/d/1I7WgyNiX-zjATcggFgolnBBVAOQ1V_DO/view" },
      { nombre: "guia-4-b · POO + WinForms", url: "https://drive.google.com/file/d/16JHv1lwgxgz85llger_xUXVfs-T6WjFP/view" },
      { nombre: "guia-5 (2) · clases y objetos", url: "https://drive.google.com/file/d/1qamcRlRgN6GXzTSy0u6EQflD1PVq1VbS/view" },
      { nombre: "StarUML", url: "https://staruml.io/" },
      { nombre: "Documentación de C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { nombre: "Windows Forms", url: "https://learn.microsoft.com/es-es/dotnet/desktop/winforms/" }
    ],
    evidencias: [
      { nombre: "PRACTICA9.zip", url: "https://drive.google.com/file/d/1WrAG9qNr9K32apxpkttdKMtUHQcJMkay/view" },
      { nombre: "Cronograma de entrega · Google Drawings", url: "https://docs.google.com/drawings/d/1mVz02Bc1ySSU_Dj9yOII38UNqXwhtUy-vLChk2zXMFA/edit" },
      { nombre: "Video · juego dino Chrome en C#", url: "https://www.youtube.com/watch?v=XjMnSS7OP2s" },
      { nombre: "Guía de métodos (PDF)", url: "https://drive.google.com/file/d/1C7_lF0h1Z-OIjJOLmKj88X2SSNNxHLuO/view" }
    ],
    quiz: [
      {
        p: "¿Qué es una clase en C#?",
        opciones: [
          "Una plantilla que define atributos y métodos",
          "Un archivo de configuración",
          "Una base de datos",
          "Un tipo de formulario"
        ],
        correcta: 0,
        explica: "La clase es el molde: describe qué datos (atributos) y qué comportamientos (métodos) tendrán sus objetos."
      },
      {
        p: "¿Cuál es la diferencia entre clase y objeto?",
        opciones: [
          "Son exactamente lo mismo",
          "El objeto es una instancia concreta de la clase",
          "La clase solo existe en UML",
          "El objeto se escribe con mayúscula"
        ],
        correcta: 1,
        explica: "La clase es la definición; el objeto es una instancia creada a partir de ella, con sus propios valores."
      },
      {
        p: "¿Para qué sirve UML antes de programar?",
        opciones: [
          "Para compilar más rápido",
          "Para representar el diseño y ponerse de acuerdo antes de escribir código",
          "Para instalar Windows Forms",
          "Para reemplazar la base de datos"
        ],
        correcta: 1,
        explica: "UML permite visualizar clases, relaciones y secuencias; así los errores de diseño se detectan antes de programar."
      }
    ]
  },
  {
    id: "proyecto",
    nombre: "Módulo 4 · Proyecto innovador",
    docente: "Prof. Francisco Arcides Canales Sorto",
    area: "Proyecto",
    periodo: "sept – nov 2025",
    nota: "Promedio final de Módulo 4",
    resumen:
      "Integraste todo en un proyecto Windows Form para un negocio real: equipos, investigación, prototipo, CRUD conectado a base de datos, interfaz innovadora y defensa en la feria de logros.",
    aprendizajes: [
      "Trabajar en equipo con roles y un cronograma de entrega.",
      "Investigar el problema y decidir la solución antes de programar.",
      "Construir un prototipo con al menos 5 layouts, un CRUD y conexión a SQL o Access.",
      "Presentar y defender el proyecto funcionando al 100 %."
    ],
    instrumentos: [
      "Proyecto.pdf — perfil del proyecto",
      "Informarce y decidir.docx",
      "Seguimiento proyecto 29 octubre (Google Sheets)",
      "Promedio Final Módulo 4 (Google Sheets)"
    ],
    programas: [
      "Visual Studio",
      "Windows Forms",
      "SQL Server",
      "Microsoft Access",
      "GitHub"
    ],
    herramientas: [
      "CRUD",
      "Windows Forms",
      "SQL",
      "MaterialSkin",
      "DarkUI",
      "Diagrama de flujo",
      "Matriz de distribución"
    ],
    actividades: [
      { nombre: "Informarse y decidir", fecha: "23 sept 2025", nota: "10/10" },
      { nombre: "Ejecutar · Entrega final del proyecto", fecha: "30 oct 2025", nota: "10/10" },
      { nombre: "Promedio Final Módulo 4", fecha: "7 nov 2025", nota: "Material de notas" }
    ],
    recursos: [
      { nombre: "Proyecto.pdf · perfil", url: "https://drive.google.com/file/d/1BUtaSpshvEb7p-HezGLyw5TVUXJvJDnm/view" },
      { nombre: "Informarce y decidir.docx", url: "https://drive.google.com/file/d/1mDooYvfTLqAEm3J9MbDFiOxQQ_qQHntT/view" },
      { nombre: "Seguimiento proyecto 29 oct", url: "https://docs.google.com/spreadsheets/d/123i5xsatiF8_MqFHFMbAxU26M-US3HJo8JIgNMV5S1A/edit" },
      { nombre: "Promedio Final Módulo 4", url: "https://docs.google.com/spreadsheets/d/1-0ZNtrNzDHYMEMhlUudjeF8ZApT5tZiBL6p2UCH9YfA/edit" },
      { nombre: "MaterialSkin (GitHub)", url: "https://github.com/IgnaceMaes/MaterialSkin" },
      { nombre: "DarkUI (GitHub)", url: "https://github.com/RobinPerris/DarkUI" }
    ],
    evidencias: [
      { nombre: "proyecto_INNOVA.zip", url: "https://drive.google.com/file/d/1LCqdrjQkO1wyjcqInwzcmqYSw3pw23Ex/view" },
      { nombre: "etapa ejecutar.zip", url: "https://drive.google.com/file/d/1Yq8Dn6UQ9FGTlQxrwMYduZvkv75m3vME/view" },
      { nombre: "Presentación del proyecto (.pptx)", url: "https://drive.google.com/file/d/1eL8dfty8Di1EbVxdxsbm1o95m8qp2-ZU/view" },
      { nombre: "Etapa de ejecutarse (PDF)", url: "https://drive.google.com/file/d/1LBZ_a8f9vTX-bnq9VutWlFzj1xZAwLiP/view" }
    ],
    quiz: [
      {
        p: "¿Qué debe incluir el prototipo del proyecto?",
        opciones: [
          "Solo una pantalla de inicio",
          "Mínimo 5 layouts, un CRUD y conexión a SQL o Access",
          "Únicamente el diagrama de flujo",
          "Solo código sin interfaz"
        ],
        correcta: 1,
        explica: "El profesor pidió al menos 5 layouts, incluyendo uno con conexión a base de datos y un CRUD."
      },
      {
        p: "¿Qué significa CRUD?",
        opciones: [
          "Crear, Revisar, Usar y Diseñar",
          "Crear, Leer, Actualizar y Eliminar",
          "Conectar, Reducir, Unir y Depurar",
          "Copiar, Reemplazar, Usar y Documentar"
        ],
        correcta: 1,
        explica: "CRUD son las cuatro operaciones básicas sobre los datos: Create, Read, Update y Delete."
      },
      {
        p: "¿Por qué se investiga y se decide antes de programar?",
        opciones: [
          "Para elegir la solución correcta y no rehacer el trabajo",
          "Para perder menos clases",
          "Porque el código sale solo",
          "Para no usar base de datos"
        ],
        correcta: 0,
        explica: "La etapa «Informarse y decidir» define el problema, los layouts y el flujo; programar sin diseño lleva a rehacer todo."
      }
    ]
  }
];
