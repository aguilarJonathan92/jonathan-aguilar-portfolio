# Convención de commits

Este proyecto usa **Conventional Commits** adaptado al español. El objetivo es mantener un historial claro, legible y fácil de rastrear.

---

## Formato

```
<tipo>(<alcance>): <descripción corta>

[cuerpo opcional]

[pie opcional]
```

### Reglas generales

- La descripción va en **minúsculas**, sin punto final
- Máximo **72 caracteres** en la primera línea
- El cuerpo es opcional, pero útil para explicar el *por qué* de un cambio
- Usar **tiempo presente**: "agrega" en lugar de "agregué" o "se agregó"

---

## Tipos

| Tipo | Cuándo usarlo |
|---|---|
| `feat` | Nueva funcionalidad o sección |
| `fix` | Corrección de un bug o comportamiento incorrecto |
| `estilo` | Cambios visuales: colores, tipografía, espaciado, sin lógica |
| `refactor` | Reorganización de código sin cambiar funcionalidad |
| `contenido` | Actualización de textos, imágenes o datos (projects.ts, skills.ts) |
| `config` | Cambios en archivos de configuración (astro.config, tsconfig, etc.) |
| `docs` | Cambios en README, COMMITS.md u otra documentación |
| `chore` | Tareas de mantenimiento: dependencias, gitignore, scripts |

---

## Alcances sugeridos

Corresponden a las secciones o capas del proyecto:

`hero` · `about` · `skills` · `projects` · `education` · `contact`  
`navbar` · `footer` · `layout` · `tokens` · `global` · `datos`

---

## Ejemplos

```bash
# Nueva sección completa
feat(hero): agrega sección de inicio con imagen de fondo y CTAs

# Ajuste visual
estilo(hero): ajusta overlay del hero para mejorar contraste del texto

# Corrección
fix(navbar): corrige scroll activo en links de navegación

# Datos
contenido(datos): actualiza links de github en projects.ts

# Configuración
config: agrega site URL en astro.config.mjs

# Documentación
docs: agrega estructura de proyecto en README

# Dependencias
chore: instala dependencias iniciales del proyecto

# Refactor
refactor(projects): extrae lógica de badges a componente Badge.astro
```

---

## Ramas

| Rama | Uso |
|---|---|
| `main` | Producción. Solo recibe merges desde `dev` cuando hay algo estable |
| `dev` | Rama de trabajo principal |
| `feat/<nombre>` | Funcionalidad específica. Ej: `feat/seccion-proyectos` |
| `fix/<nombre>` | Corrección específica. Ej: `fix/navbar-mobile` |

### Flujo típico

```bash
# Arrancar una nueva sección
git checkout dev
git checkout -b feat/seccion-hero

# ... trabajar ...

git add .
git commit -m "feat(hero): agrega sección de inicio con imagen y botones"
git checkout dev
git merge feat/seccion-hero
git branch -d feat/seccion-hero
```

---

## Primer commit del proyecto

```bash
git init
git add .
git commit -m "chore: inicializa proyecto con estructura base de Astro"
git branch -M main
git remote add origin https://github.com/aguilarjonathand/jonathan-aguilar-portfolio.git
git push -u origin main
```
