# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

📚 Proyecto: Curso Diseño Digital 1
Sitio web estático creado con Astro para documentar las unidades del curso, integrando teoría, mapas conceptuales y reflexiones.

🚀 Características
3 Unidades Temáticas:

Génesis de Sistemas Gráficos

Diseño UI Moderno

Accesibilidad Web

Mapas Conceptuales: Diagramas visuales interconectando temas clave.

Diseño Responsivo: Adaptable a móviles, tablets y desktop.

Zero JS: Sin dependencias externas (solo Astro + CSS/HTML).

🏗️ Estructura del Proyecto
markdown
src/
├── pages/
│   ├── index.astro          # Página principal
│   ├── unidad-1.astro       # Historia del diseño digital
│   ├── unidad-2.astro       # UI moderno y ética
│   └── unidad-3.astro       # Accesibilidad web
├── components/
│   ├── Header.astro         # Barra de navegación
│   └── MapaMental.astro     # Componente para diagramas
public/
└── images/                  # Assets visuales
🎨 Directrices de Diseño
1. Paletas por Unidad
Unidad	Color Principal	Uso
Génesis Gráficos	#2563eb (Azul)	Títulos, énfasis
UI Moderno	#7c3aed (Morado)	Botones, degradados
Accesibilidad	#10b981 (Verde)	Elementos interactivos
2. Tipografía
Títulos: Space Grotesk (Google Fonts)

Cuerpo: Inter (Optimizada para legibilidad)

3. Layout
Grids flexibles (auto-fit + minmax()).

Espaciado consistente (margin: 2rem 0).

📝 Contenido por Unidad
Cada página (unidad-1.astro, unidad-2.astro, unidad-3.astro) incluye:

Introducción temática (hero section).

4 subtemas (tarjetas con íconos).

Mapa conceptual (imagen interactiva placeholder).

Glosario integrado (15 términos dentro del flujo de contenido).

Reflexión final (blockquote destacado).

Ejemplo de estructura en código:

astro
<section class="glosario">
  <h2>Conceptos Clave</h2>
  <div class="concepto">
    <h3>Pixel</h3>
    <p>Unidad mínima de una imagen digital.</p>
    <img src="/icons/pixel.svg" alt="Icono de píxel">
  </div>
  <!-- Repetir x15 -->
</section>
🛠️ Cómo Contribuir
Requisitos:

Node.js v18+

VS Code (recomendado)

Instalación:

bash
npm install
npm run dev
Archivos clave:

src/styles/global.scss: Variables CSS y estilos base.

public/images/: Subir mapas conceptuales en JPG/PNG.

🌍 Despliegue
Generar versión estática:

bash
npm run build
Hosting recomendado:

Netlify (arrastrar carpeta dist/).

Vercel (conectar repositorio Git).

📜 Licencia
MIT © 2024 - Proyecto educativo sin fines comerciales.
