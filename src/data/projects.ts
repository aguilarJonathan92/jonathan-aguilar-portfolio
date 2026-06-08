export interface Project {
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  stack: string[];
  status: 'completado' | 'en-curso';
  featured: boolean;
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Bitácora Armónica Digital",
    subtitle: "Sistema de gestión académica · Escuela de música",
    description: "Sistema integral para una escuela de música. Alumnos, docentes, asistencia, calificaciones ponderadas y portal público estudiantil por DNI.",
    challenge: "JWT con JJWT 0.12.x, migraciones Flyway en entorno productivo y reportes PDF dinámicos con iText 8.",
    stack: ["Spring Boot 3.5", "React 19", "Tailwind v4", "MySQL", "Flyway", "JWT", "iText 8"],
    status: "completado",
    featured: true,
    github: "https://github.com/usuario/gestion-academica",
    demo: "",
  },
  {
    title: "Soundwave Store",
    subtitle: "E-commerce de equipamiento de audio",
    description: "Tienda online con panel Filament, carrito híbrido sesión/DB y checkout con validaciones condicionales.",
    challenge: "Carrito híbrido sesión/DB con sincronización al login, paginación con preservación de filtros.",
    stack: ["Laravel 13", "Filament", "Blade", "Bootstrap 5", "MySQL"],
    status: "completado",
    featured: false,
    github: "https://github.com/usuario/soundwave-store",
  },
  {
    title: "Cristal Librería",
    subtitle: "Sistema de inventario · Librería cristiana local",
    description: "Sistema de gestión de stock con Filament. Categorías, productos y movimientos de inventario.",
    challenge: "Seguimiento de movimientos de stock con historial de entradas y salidas.",
    stack: ["Laravel", "Filament 5", "MySQL"],
    status: "en-curso",
    featured: false,
    github: "https://github.com/usuario/cristal-libreria",
  },
];
