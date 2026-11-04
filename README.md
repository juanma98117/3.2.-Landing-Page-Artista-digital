# 3.2.-Landing-Page-Artista-digital

## Tabla de Recursos y Licencias

Todos los recursos multimedia utilizados en esta página web cuentan con licencias libres para su uso digital:

| Recurso | Tipo | Archivo / Ubicación | Licencia | Fuente Original ||
| :--- | :--- | :--- | :--- | :--- |
| Logo Venus | Imagen | `assets/imagenes/venus.png` | Dominio Público (CC0) | [https://unsplash.com/es/fotos/pluton-sobre-fondo-negro--5V6VZxSQRo](https://unsplash.com/es/fotos/pluton-sobre-fondo-negro--5V6VZxSQRo) |
| Fondo Cósmico | Imagen | `assets/imagenes/fondo.webp` | Licencia Unsplash / Pixabay | [https://unsplash.com/es/fotos/una-vista-de-una-gran-tormenta-B0p-oLFKtjA](https://unsplash.com/es/fotos/una-vista-de-una-gran-tormenta-B0p-oLFKtjA) |
| Poster Vídeo | Imagen | `assets/imagenes/poster.webp` | Dominio Público (CC0) | Foto extraído del vídeo propio |
| Galería Directo | Imagen | `assets/imagenes/astronauta.webp` | CC BY-SA 4.0 | [https://pixabay.com/photos/astronaut-planets-mars-earth-9056443/](https://pixabay.com/photos/astronaut-planets-mars-earth-9056443/) |
| Galería Artista | Imagen | `assets/imagenes/dama` | CC BY-SA 4.0 | [https://pixabay.com/illustrations/ai-generated-woman-fantasy-planets-8964431/](https://pixabay.com/illustrations/ai-generated-woman-fantasy-planets-8964431/) |
| Galería Escenario | Imagen | `assets/imagenes/planetas` | [https://pixabay.com/illustrations/ai-generated-space-planets-universe-8469846/](https://pixabay.com/illustrations/ai-generated-space-planets-universe-8469846/) |
| Animación Planeta | Vídeo | `assets/video/presentacion.mp4` | Licencia Pixabay / Pexels |
| Audio de ambiente| Audio | `assets/audio/audio-ambiental.mp3`| Pixabay Content License | [https://pixabay.com/es/music/ambiente-drone-ambient-518685/](https://pixabay.com/es/music/ambiente-drone-ambient-518685/) |

---

## Justificación Técnica de Formatos

He elegido los siguientes formatos buscando la máxima calidad con el menor peso posible.

### 1. Formatos de Imagen

* **WebP:** Lo utilicé como formato principal para las imágenes de mapa de bits (fotografías del directo, artista, escenario y fondo). Ofrece compresión con y sin pérdida en un único formato, soporte de canal alfa y un ahorro de peso del **25-35%** respecto a JPEG y PNG. Es compatible con todos los navegadores modernos.
  
* **PNG:** Solo lo utilicé en el logotipo por emplear compresión sin pérdida y soportar canal alfa completo. Es la opción requerida para gráficos sobre fondos de color variable o con necesidad de nitidez.
  
* **Exclusión de JPEG y GIF:** Descarté JPEG ya que WebP ofrece mayor reducción de peso, y descarté GIF debido a sus limitaciones de paleta (máximo 256 colores), alto peso de archivo y falta de transparencia suave.

### 2. Formato de Vídeo

* **MP4 con Códec H.264: frente a AVI** Elegí esta combinación ya que es la estándar recomendada por ofrecer una compatibilidad del 100% en todos los navegadores móviles y de escritorio, así como en dispositivos iOS y Android.

### 3. Formato de Audio

* **MP3:** Elegí mp3 como formato de audio web por ser el estándar universal, 100% compatible en todos los navegadores y dispositivos. 
* **Exclusión de WAV:** Descarté WAV por ser un formato sin compresión que genera archivos muy pesados.

---
## Herramientas Utilizadas

Durante el proceso de diseño, tratamiento multimedia y desarrollo usé las siguientes herramientas:

| Herramienta | Tipo de Uso / Proceso |
| :--- | :--- |
| **GIMP** | Edición gráfica, redimensionado de miniaturas (400x250) y optimización/conversión de imágenes a formato WebP y PNG. |
| **HandBrake** | Transcodificación de vídeo H.264, ajuste de resolución (720p) y compresión de tasa de bits (700 kbps). |
| **Audacity** | Recorte a 15 segundos, efectos de *Fade-in/Fade-out* y exportación de audio ambiental en estéreo a 192 kbps. |

