# Imágenes de fondo

Para personalizar tu página de imprenta, puedes agregar estas imágenes:

## hero.jpg
- Ubicación: `/public/hero.jpg`
- Tamaño recomendado: 1920x1080px o similar
- Se usa como fondo del banner principal

## background.jpg
- Ubicación: `/public/background.jpg`
- Tamaño recomendado: 1920x1080px o similar
- Se usa como fondo fijo de toda la página

Si no colocas estas imágenes, la página mantendrá su diseño con colores sólidos.

# Personalización adicional

## Ubicación en Google Maps
Para cambiar la ubicación mostrada en el mapa:
1. Ve a Google Maps
2. Busca tu dirección exacta
3. Haz clic en "Compartir" > "Insertar un mapa"
4. Copia la URL del iframe
5. Reemplaza la URL en el archivo `src/App.jsx` en la línea del iframe

## Botón de WhatsApp
Para cambiar el número de WhatsApp:
1. Busca el archivo `src/App.jsx`
2. Encuentra el enlace que comienza con `https://wa.me/`
3. Reemplaza `5491112345678` con tu número de WhatsApp (sin el +)
4. También puedes modificar el mensaje predeterminado cambiando el parámetro `text=`