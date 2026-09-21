# Cabeceros con tablet — Smart EV Power

Landing comercial de **Santiago Asesor / Smart EV Power** (Colombia).
Sitio estático en `docs/`: HTML, CSS y JS, sin build y sin servicios de pago.
Listo para publicarse gratis en GitHub Pages.

La página está en español (Colombia). El precio y las ciudades de envío o instalación **no están definidos**. No inventes esos datos en la página.

## Ver la página en el computador

Desde la raíz del repositorio:

```bash
cd docs
python3 -m http.server 8080
```

Abre [http://localhost:8080](http://localhost:8080).

Hace falta un servidor local (el de arriba basta). Si abres el archivo directo (`file://`), las rutas siguen, pero el navegador puede bloquear la carga de medios.

## TODO: número de WhatsApp

El enlace es un marcador, no un número real:

`https://wa.me/XXXXXXXXXXX`

**Antes de publicar**, busca `XXXXXXXXXXX` en `docs/index.html` y cámbialo en **todos** los enlaces.

Formato: solo dígitos, con indicativo de país, sin `+`, sin espacios y sin guiones.
Para un celular de Colombia: `57` y después los 10 dígitos.

Ejemplo de forma (esto no es un número): `57` + `3xx xxx xxxx` → `573xxxxxxxxx` dentro de `https://wa.me/573xxxxxxxxx`.

El texto que se abre en el chat ya va armado: “Hola Santiago, quiero información del cabecero con tablet.” Puedes dejarlo o editarlo en el parámetro `text` de cada enlace.

## Fotos y videos

Copia los archivos a `docs/assets/media/`. El nombre tiene que coincidir **exacto**, en minúsculas y sin espacios. En GitHub Pages las mayúsculas importan.

Fotos — se acepta `.webp`, `.jpg`, `.jpeg` o `.png` (en ese orden):

| Toma | Archivo | Qué mostrar |
| --- | --- | --- |
| Foto 01 | `01-tablet-trasera-encendida` | Tablet trasera instalada y encendida |
| Foto 02 | `02-patas-deslizables` | Patas deslizándose |
| Foto 03 | `03-cojin-delantero` | Cojín delantero |
| Foto 04 | `04-kit-cables-guaya` | Kit: cables y guaya de seguridad |
| Foto 05 | `05-conexion-bateria` | Conexión a los accesorios de la batería |
| Foto 06 | `06-pantalla-apps` | Pantalla de la tablet con apps |
| Foto 07 | `07-control-teclado` | Control o teclado Bluetooth |
| Foto 08 | `08-tipos-de-vehiculo` | El cabecero en 2 o 3 tipos de vehículo |
| Foto 09 | `09-pasajero-usando` | Pasajero usándolo |
| Foto 10 | `10-hero-producto` | Foto limpia del producto (héroe y galería) |

Videos — `.mp4` o `.webm`:

| Clip | Archivo | Qué mostrar |
| --- | --- | --- |
| Video 01 | `video-instalacion` | Instalación, 20–40 s |
| Video 02 | `video-patas` | Ajuste de las patas |
| Video 03 | `video-abrir-app` | Abrir una aplicación |

Ejemplo: `docs/assets/media/10-hero-producto.jpg`

Recarga. Si el archivo está, ocupa el marco. Si no, se queda el esquema gris con su etiqueta. La misma lista está en `docs/assets/media/LEEME.txt`. Cada marco también tiene un comentario `MEDIA` en `docs/index.html`.

Cuando haya foto de héroe, puedes apuntar `og:image` en `docs/index.html` a ese archivo. Hoy no hay imagen de vista previa a propósito.

## Precio y ciudades

Déjalos así hasta tener el dato real:

- `Consulta precio por WhatsApp`
- `Cubrimos [ciudades — por confirmar]`

Están en el héroe, las preguntas, la franja final y el pie. Edítalos en `docs/index.html` cuando Santiago confirme el precio y las ciudades. No pongas un precio de relleno.

## Publicar en GitHub Pages (gratis)

No hace falta GitHub Actions ni un build: lo que está en `docs/` ya es el sitio. `docs/.nojekyll` evita que Pages procese la carpeta con Jekyll.

En el plan gratuito, Pages solo sirve repositorios **públicos**.

1. En GitHub abre el repositorio **Landing-Cabecero**.
2. Entra a **Settings → Pages**.
3. En **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/docs`
4. Pulsa **Save**.

GitHub muestra la dirección arriba en esa misma pantalla. Para este repositorio queda:

[https://atooadm.github.io/Landing-Cabecero/](https://atooadm.github.io/Landing-Cabecero/)

La primera vez puede tardar un minuto. Si renombras el repositorio o la cuenta, la URL pasa a `https://<usuario>.github.io/<repositorio>/` y conviene actualizar el `canonical` en `docs/index.html`.

No uses la carpeta `/ (root)` salvo que muevas `index.html` a la raíz. Esta página está armada para **`main` + `/docs`**.

## Qué no incluye

- Precio, promociones, tiempos de envío o ciudades que no estén confirmados.
- Testimonios, calificaciones o cantidad de clientes.
- Ficha técnica (pulgadas, resolución, memoria, marca del procesador, versión de Android).
- Analytics, píxeles, formularios de pago o tipografías cargadas desde otro servicio. Outfit y Source Sans 3 van en el repo, bajo licencia SIL Open Font License (`docs/assets/fonts/`).
