Lista de Tareas - Proyecto React + TypeScript

📋 Descripción
Este proyecto es una aplicación moderna de lista de tareas (Todo List) desarrollada con React, TypeScript y Tailwind CSS. Permite a los usuarios gestionar sus tareas diarias con características avanzadas como prioridades, fechas límite y filtros.

    ✨ Características Principales
    ✅ Crear tareas con diferentes niveles de prioridad (baja, media, alta)
    📅 Asignar fechas límite a las tareas
    🔍 Filtrar tareas por estado (todas, activas, completadas)
    📊 Panel de estadísticas en tiempo real
    💾 Persistencia de datos en localStorage
    🎨 Interfaz moderna y responsive con animaciones
    🌈 Indicadores visuales de prioridad por colores

🛠️ Tecnologías Utilizadas

    React
    TypeScript
    Tailwind CSS
    Lucide Icons
    LocalStorage para persistencia
    PostCSS

🚀 Cómo Usar la Aplicación

    Agregar una Nueva Tarea
    Escribe el texto de la tarea en el campo principal
    Selecciona la prioridad (🟢 Baja, 🟡 Media, 🔴 Alta)
    Opcionalmente, establece una fecha límite
    Haz clic en "¡AGREGAR!"

Gestionar Tareas

    Marca una tarea como completada haciendo clic en el círculo
    Elimina una tarea usando el ícono de papelera
    Filtra las tareas usando los botones de filtro (Todas, Activas, Completadas)

Visualización de Estadísticas
El panel superior muestra:

    Total de tareas
    Tareas completadas
    Tareas pendientes

💻 Instalación y Ejecución Local

    # Clonar el repositorio
    git clone [URL-del-repositorio]

    # Instalar dependencias
    npm install

    # Ejecutar en modo desarrollo
    npm run dev

📁 Estructura del Proyecto

src/
├── components/          # Componentes React
│   ├── TodoForm.tsx    # Formulario para agregar tareas
│   ├── TodoItem.tsx    # Componente individual de tarea
│   ├── TodoStats.tsx   # Panel de estadísticas
│   └── TodoFilters.tsx # Filtros de tareas
├── hooks/
│   └── useTodos.ts     # Hook personalizado para lógica de tareas
├── types/
│   └── todo.ts         # Definiciones de tipos TypeScript
└── App.tsx             # Componente principal

🎨 Personalización

La aplicación utiliza Tailwind CSS para los estilos, lo que permite una fácil personalización a través de las clases de utilidad. Los colores principales son:
    Amarillo para acciones principales
    Verde para prioridad baja
    Amarillo para prioridad media
    Rojo para prioridad alta

🔍 Características Técnicas

    Tipado estricto con TypeScript
    Gestión de estado con React Hooks
    Animaciones CSS personalizadas
    Diseño responsive
    Persistencia automática de datos
    Confirmación antes de eliminar tareas
    
📱 Responsive Design
    La aplicación está completamente optimizada para dispositivos móviles y de escritorio, proporcionando una experiencia de usuario consistente en todas las pantallas.
