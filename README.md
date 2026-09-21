# Cabecero con tablet Aprix — Smart EV Power

Landing corta, en español (Colombia), de **Santiago Asesor / Smart EV Power**.
Sitio estático en `docs/`. Sirve en GitHub Pages gratis, sin build.

El producto en las fotos es **Aprix**. El precio no está publicado: se consulta por WhatsApp. No inventes número, precio ni ciudades.

## Verla en el computador

```bash
cd docs
python3 -m http.server 8080
```

Abre [http://localhost:8080](http://localhost:8080).

## TODO: número de WhatsApp

El enlace sigue siendo un marcador:

`https://wa.me/XXXXXXXXXXX`

**Antes de publicar**, busca `XXXXXXXXXXX` en `docs/index.html` y cámbialo en todos los enlaces.

Solo dígitos, con indicativo de país, sin `+` ni espacios. Colombia: `57` y los 10 dígitos del celular.

El mensaje que se abre dice: “Hola Santiago, quiero información del cabecero con tablet.”

## Fotos que usa la página

Están en `docs/assets/media/`:

| Archivo | Dónde se ve |
| --- | --- |
| `04-familia-viaje.jpeg` | Héroe. Papá manejando, niño atrás con control |
| `02-calidad-comodidad.jpeg` | Cómodo al frente. Cojín con el texto de calidad |
| `03-ajuste-universal.jpeg` | Cabe en tu carro. Infografía Aprix, 90–185 mm |
| `05-tablet-juegos-dia.jpeg` | Juegan atrás. Tablet y control, de día |
| `01-textura-cojin.jpeg` | De cerca. Textura del cojín, sin texto |
| `06-tablet-juegos-noche.jpeg` | De cerca. Tablet y control, de noche |

Se pueden sumar más fotos o videos después, en esa misma carpeta, y enlazarlos en `docs/index.html`. La página ya no reserva marcos vacíos.

## Publicar en GitHub Pages (gratis)

No hace falta GitHub Actions. `docs/.nojekyll` evita que Pages pase la carpeta por Jekyll. En el plan gratuito el repositorio tiene que ser **público**.

1. **Settings → Pages**
2. **Build and deployment**
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/docs`
3. **Save**

Dirección: [https://atooadm.github.io/Landing-Cabecero/](https://atooadm.github.io/Landing-Cabecero/)

GitHub la confirma arriba en esa pantalla. La primera vez puede tardar un minuto.

## Qué no incluye

- Precio, ciudades de envío o un número de WhatsApp real.
- Ficha técnica que no esté en las fotos (memoria, procesador, pulgadas).
- El rango 90–185 mm solo se menciona como lo trae la infografía de Aprix (“anchura ilustrativa”).
