# Portfolio

Simple static portfolio. Sections are split into partial HTML files under `partials/` for use with template engines or static site generators.

## Customization

### Header (`partials/header.html`)
- Update the name inside the `<h1>` tag.
- Replace menu icons or destinations in the `<nav>` list.

### Hero (`partials/hero.html`)
- Replace `./img/img-1_mobile.jpg` and `./img/perfil.jpg` with your own images.
- Edit the introductory text and button link.

### Projects (`partials/projects.html`)
- Each project box includes an image, title and description.
- Swap the project images under `img/` or adjust the paths.
- Update titles, descriptions and the "More work" button URL.

### Contact (`partials/contact.html`)
- Change the email address or add links to other profiles.

### Styles (`style.css`)
- The layout uses [TailwindCSS](https://tailwindcss.com/) via CDN for responsive flex/grid utilities.
- Override colors, fonts or add custom rules in `style.css` as needed.

### Scripts (`script.js`)
- ScrollReveal is loaded only on wide screens and animations trigger when elements enter the viewport, reducing work on mobile devices.

## Development

To assemble the final page, use a static site generator or template engine that can include the files in `partials/` (e.g., SSI with `<!--#include virtual="partials/header.html" -->`).
