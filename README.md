# Cabecero con tablet Aprix — Smart EV Power

Landing corta, en español (Colombia), de **Santiago Asesor / Smart EV Power**.
Sitio estático en `docs/`. Sirve en GitHub Pages gratis, sin build.

El producto en las fotos es **Aprix**. El precio publicado es **$279.900** por un cabecero y **$499.900** por el par (los dos). No inventes otros cobros, ciudades ni un número de WhatsApp.

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
| `00-hero-Car_seat_headrest_tablet_display_20260921164400.jpeg` | Héroe. Tablet en el carro, con una película |
| `02-calidad-comodidad.jpeg` | Calidad y comodidad. Cojín |
| `03-ajuste-universal.jpeg` | Adaptable a cualquier vehículo. Infografía; ajuste de 12 cm a 19 cm |
| `01-producto-apps.jpeg` | Tu centro de entretenimiento. Producto en estudio |
| `04-familia-viaje.jpeg` | Para los pasajeros de atrás |
| `05-producto-pelicula.jpeg` | Pantalla de 10,1 pulgadas HD. Producto en estudio |

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

- Ciudades de envío, otros cobros o un número de WhatsApp real. El precio del producto sí está: $279.900 y $499.900 el par.
- Ficha técnica que no esté en las fotos (memoria, procesador, pulgadas).
- El ancho de las patas es de 12 cm a 19 cm.
