<div align="center">

# Jonathan Aguilar · Portfolio

**Backend Developer · Java & PHP**  
Corrientes, Argentina

[![Astro](https://img.shields.io/badge/Astro-5.x-534AB7?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-AFA9EC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-1A1730?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

[Ver portfolio](#) · [Descargar CV](#) · [LinkedIn](#)

</div>

---

## Descripción

Portfolio personal desarrollado con Astro y Tailwind CSS. Presenta mis proyectos, stack técnico y formación académica. Diseñado con un enfoque técnico y minimalista, con paleta Violeta + Slate personalizada.

## Stack

| Herramienta | Versión | Uso |
|---|---|---|
| [Astro](https://astro.build) | 5.x | Framework principal (SSG) |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Estilos utilitarios |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | — | Tipografía display |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Tipografía cuerpo |
| [Vercel](https://vercel.com) | — | Deploy |

## Estructura del proyecto

```
jonathan-aguilar-portfolio/
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── assets/
│   │   └── images/          # Imágenes del hero y proyectos
│   ├── components/
│   │   ├── sections/        # Una sección del portfolio por archivo
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Skills.astro
│   │   │   ├── Projects.astro
│   │   │   ├── Education.astro
│   │   │   └── Contact.astro
│   │   └── ui/              # Componentes reutilizables
│   │       ├── Navbar.astro
│   │       ├── Footer.astro
│   │       ├── Badge.astro
│   │       └── ProjectCard.astro
│   ├── data/                # Contenido desacoplado del markup
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── global.css
│       └── tokens.css       # Variables CSS (paleta, tipografía, espaciado)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/aguilarjonathand/jonathan-aguilar-portfolio.git
cd jonathan-aguilar-portfolio

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Secciones

| Sección | Descripción |
|---|---|
| **Inicio** | Hero con imagen de fondo, nombre, rol y CTAs |
| **Sobre mí** | Presentación personal, trayectoria y datos de contacto rápido |
| **Herramientas** | Stack técnico agrupado por categoría |
| **Proyectos** | Proyectos destacados con descripción, desafío técnico y links |
| **Formación** | Educación formal y autodidacta |
| **Contacto** | Links directos a email, GitHub y LinkedIn |

## Proyectos destacados

- **Bitácora Armónica Digital** — Sistema de gestión académica para escuela de música. Spring Boot 3.5 + React 19 + MySQL.
- **Soundwave Store** — E-commerce de equipamiento de audio. Laravel 13 + Filament + Bootstrap 5.
- **Cristal Librería** — Sistema de inventario para librería local. Laravel + Filament 5.

## Deploy

El proyecto está configurado para deploy automático en Vercel desde la rama `main`.

```
main → producción (deploy automático)
dev  → rama de trabajo activa
```

## Convención de commits

Ver [`COMMITS.md`](./COMMITS.md) para la convención completa de mensajes de commit usada en este proyecto.

## Licencia

© 2026 Jonathan Aguilar. Todos los derechos reservados.
