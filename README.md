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

## Linter y formato

```bash
npm run lint           # oxlint sobre src/ y api/
npm run format         # prettier --write
npm run format:check   # lo que comprueba el CI
```

[oxlint](https://oxc.rs) avisa de variables sin usar, `console.log` olvidados, claves
repetidas en un objeto y errores de corrección. Las reglas desactivadas y su motivo
están en `.oxlintrc.json`. En `api/` se permite `console`: son funciones de Vercel y
esos logs van al log de la función.

De un `.astro` mira el frontmatter y los `<script>`, pero **no la plantilla HTML**: un
atributo repetido en una etiqueta o un problema de accesibilidad del marcado no los ve
nadie todavía.

Prettier formatea `.astro`, `.ts`, `.js` y `.css` de `src/` y `api/`. Queda fuera el
bundle de `design-system/`, que es material de referencia, y `src/icons/`, que son SVG
copiados tal cual. Si un cambio tuyo sale con ruido de espacios, pasa `npm run format`
antes de hacer commit.

El workflow `.github/workflows/lint.yml` corre `lint` y `format:check` en cada pull
request y en cada push a `main`. No hay tests: junto con `npm run build`, son la
comprobación de que nada se ha roto.

## Variables de entorno

Copia `.env.example` como `.env` (no se sube a git) y rellena lo que necesites:

| Variable | Para qué |
| --- | --- |
| `PUBLIC_GTM_ID` | Contenedor de Google Tag Manager. Vacío = no se carga GTM. |
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
- [ ] Clave real de reCAPTCHA: `contact.astro` lleva todavía la clave de prueba
      pública de Google, que aprueba a cualquiera. Cambiar la pública del HTML y la
      `RECAPTCHA_SECRET_KEY` de Vercel por las del sitio
- [ ] Dominio verificado en Resend y `CONTACT_FROM_EMAIL` con ese dominio, o el correo
      de la consulta se rechaza
- [ ] `src/components/InquiryForm.astro` sigue siendo una maqueta que no envía nada;
      el formulario que funciona es el de `/contact`
