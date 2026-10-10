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

`npm run dev` y `npm run preview` sirven el sitio, pero no `/api/contact`: esa ruta es
una función de Vercel, fuera del build de Astro. Para probarla en local hace falta
`vercel dev`; en los deploys de preview de Vercel funciona como en producción.

No hay tests ni linter configurados: `npm run build` es la comprobación de que nada
se ha roto.

## Variables de entorno

Copia `.env.example` como `.env` (no se sube a git) y rellena lo que necesites:

| Variable | Para qué |
| --- | --- |
| `PUBLIC_GTM_ID` | Contenedor de Google Tag Manager. Vacío = no se carga GTM. |
| `PUBLIC_RECAPTCHA_SITE_KEY` | Clave pública de reCAPTCHA v2, la que pinta la casilla en `/contact`. |
| `RECAPTCHA_SECRET_KEY` | Clave secreta de reCAPTCHA v2, para verificar el token en el servidor. |
| `RESEND_API_KEY` | API key de [Resend](https://resend.com), que envía el correo de la consulta. |
| `CONTACT_FROM_EMAIL` | Remitente verificado en Resend. No es el correo del visitante. |
| `CONTACT_TO_EMAIL` | Bandeja de Luke. Vacía = `BUSINESS.email` de `src/data/site.ts`. |

En Vercel se configuran en *Settings > Environment Variables*, en Production y Preview.
Sin las del formulario, `/api/contact` responde 503 y la página muestra un error con el
teléfono y el correo de Luke en lugar de perder la consulta en silencio.

## Estructura

```
api              funciones de Vercel, fuera de Astro: contact.ts envía la consulta
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

### Iconos

Los SVG de `src/icons/` están copiados a mano, no vienen de ningún paquete de npm: el
componente `Icon.astro` los lee con `import.meta.glob` y los inserta en línea, así que
un icono no cuesta ninguna petición. Para añadir uno, deja el fichero en `src/icons/` y
úsalo con `<Icon name="<nombre-del-fichero>" />`.

- **Iconos de interfaz** (`arrow-right`, `clock`, `map-pin`, `star`…) — [Lucide](https://lucide.dev)
  v0.544.0, licencia ISC. Trazo de 2px sobre rejilla de 24px, `stroke="currentColor"`,
  siempre de contorno. Varios conservan la cabecera `<!-- @license lucide-static … -->`.
- **Marcas** (`facebook`, `instagram`, `tiktok`, `tripadvisor`, `trustpilot`, `google`,
  `x-logo`, `youtube`) — [Simple Icons](https://simpleicons.org) v16.29.0, licencia CC0.
  Un único `path` relleno con `currentColor` y un `<title>` con el nombre de la marca.
- `public/icons/*-color.svg` son las versiones con el color corporativo de la marca, para
  los sellos de reseñas; esas sí se sirven como fichero porque van en un `<img>`.

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
- [ ] Par de claves de reCAPTCHA del sitio en Vercel: `PUBLIC_RECAPTCHA_SITE_KEY` y
      `RECAPTCHA_SECRET_KEY`, registradas en google.com/recaptcha/admin para
      `secretspotsoficeland.com` y para el dominio de preview
- [ ] Dominio verificado en Resend y `CONTACT_FROM_EMAIL` con ese dominio, o el correo
      de la consulta se rechaza
