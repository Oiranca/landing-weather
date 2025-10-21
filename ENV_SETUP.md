# Configuración del archivo .env

Este proyecto utiliza **Vite** como bundler y un archivo `.env` para almacenar variables de configuración sensibles como las claves API.

## 📦 Instalación de dependencias

**IMPORTANTE:** Antes de usar el proyecto, debes instalar las dependencias:

```bash
npm install
```

Esto instalará Vite y todas las herramientas necesarias para el desarrollo.

## Pasos para configurar tu .env

### 1. Crea tu archivo .env

Copia el archivo de ejemplo:

```bash
cp .env.example .env
```

O créalo manualmente en la raíz del proyecto con el siguiente contenido:

```
VITE_OPENWEATHER_API_KEY=tu_clave_api_aqui
```

**⚠️ IMPORTANTE:** En Vite, todas las variables de entorno que quieras exponer al cliente deben comenzar con el prefijo `VITE_`

### 2. Obtén tu API Key de OpenWeather

1. Ve a [OpenWeatherMap](https://openweathermap.org/api)
2. Crea una cuenta gratuita
3. Ve a "API Keys" en tu perfil
4. Copia tu API key

### 3. Configura tu .env

Abre el archivo `.env` y reemplaza `tu_clave_api_aqui` con tu API key real:

```
VITE_OPENWEATHER_API_KEY=abc123def456ghi789jkl012mno345pq
```

### 4. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

Esto abrirá automáticamente tu navegador en `http://localhost:3000`

## 🚀 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Vite
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta los linters
- `npm run format` - Formatea el código

## Seguridad

⚠️ **IMPORTANTE**: 
- El archivo `.env` está incluido en `.gitignore` para que no se suba al repositorio
- **NUNCA** compartas tu API key públicamente
- **NUNCA** subas el archivo `.env` a GitHub
- Las variables con prefijo `VITE_` estarán disponibles en el código del cliente (navegador)

## ¿Cómo funciona?

Vite procesa las variables de entorno durante el build:

1. Lee el archivo `.env` en la raíz del proyecto
2. Expone las variables que comienzan con `VITE_` a través de `import.meta.env`
3. En el código JavaScript, puedes acceder a ellas con `import.meta.env.VITE_NOMBRE_VARIABLE`

## Fallback

Si no configuras el archivo `.env`, la aplicación mostrará un error indicando que necesitas configurar tu API key.
