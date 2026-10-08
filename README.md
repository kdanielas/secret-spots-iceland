# Secret Spots of Iceland

Web en [Astro 4](https://astro.build) (salida estática) que sustituirá al sitio actual
en Squarespace. Es una web de marketing para los tours privados de fotografía de Luke:
no hay carrito ni reserva online, todo acaba en una consulta por formulario, teléfono
o correo.

**Todavía no está lanzada.** El dominio de preview bloquea a los buscadores por tres
sitios a la vez (ver [Antes de lanzar](#antes-de-lanzar)).

## Arrancar en local

Requiere Node 18.17.1 o superior (requisito de Astro 4).

```bash
npm install
npm run dev        # http://localhost:4321
```

## Construir y previsualizar

```bash
npm run build      # genera dist/
npm run preview    # sirve dist/ como lo hará producción
```

No hay tests ni linter configurados: `npm run build` es la comprobación de que nada
se ha roto.

## Variables de entorno

Copia `.env.example` como `.env` (no se sube a git) y rellena lo que necesites. Hoy
solo hay una variable:

| Variable | Para qué |
| --- | --- |
| `PUBLIC_GTM_ID` | Contenedor de Google Tag Manager. Vacío = no se carga GTM. |

En Vercel se configuran en *Settings > Environment Variables*, en Production y Preview.

## Estructura

```
src/pages        una página por ruta (incluye tours/ y blog/)
src/components   componentes reutilizables
src/layouts      Layout.astro: head, cabecera, pie, GTM y consentimiento
src/data         fuente de datos: tours, entradas de blog y datos del negocio
src/lib          lógica auxiliar (JSON-LD, consentimiento, helpers de tour y blog)
src/styles       global.css, responsive.css, motion.css y tokens/
src/icons        SVG que se insertan en línea vía el componente Icon
public           lo que se sirve tal cual (fuentes, favicon, og-default, robots.txt)
design-system    sistema de diseño de referencia: tokens, guías y HANDOFF.md
```

Dos ficheros concentran casi todo el contenido editable:

- `src/data/site.ts` — datos del negocio (teléfono, correo, dirección, kennitala) y
  `SITE_URL`. Es la única fuente de verdad para el pie y para el JSON-LD.
- `src/data/tours.ts` y `src/data/blog-posts.ts` — catálogo de tours y entradas.

`SITE_URL` en `src/data/site.ts` y `site` en `astro.config.mjs` tienen que coincidir.

## Despliegue

Vercel, rama `main`. Cada push a `main` publica. Las ramas de trabajo generan un
deploy de preview propio.

## Antes de lanzar

- [ ] Redirecciones 301 de las URLs de Squarespace (ver incidencia correspondiente)
- [ ] Quitar el bloqueo a buscadores, que está en **tres** sitios: `public/robots.txt`,
      la cabecera `X-Robots-Tag` de `vercel.json` y el `<meta name="robots">` de
      `src/layouts/Layout.astro`
- [ ] Añadir el sitemap: `site` ya está configurado en `astro.config.mjs`, pero falta
      instalar `@astrojs/sitemap` y enlazarlo desde `robots.txt`
- [ ] Contenedor de Tag Manager (`PUBLIC_GTM_ID`) y eventos de GA4
- [ ] Formulario de contacto enviando de verdad — hoy `src/components/InquiryForm.astro`
      es una maqueta que no envía nada a ningún sitio
