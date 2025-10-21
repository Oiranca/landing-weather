# 🚀 Inicio Rápido

## Pasos para comenzar

### 1️⃣ Instalar dependencias
```bash
npm install
```

### 2️⃣ Configurar archivo .env
```bash
# Copia el ejemplo
cp .env.example .env

# Edita .env y añade tu API key
# VITE_OPENWEATHER_API_KEY=tu_clave_aqui
```

### 3️⃣ Obtener API Key
1. Regístrate en https://openweathermap.org/api
2. Ve a tu perfil > API Keys
3. Copia tu clave

### 4️⃣ Ejecutar el proyecto
```bash
npm run dev
```

Se abrirá automáticamente en http://localhost:3000

---

## 📋 Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run preview` | Preview del build |
| `npm run lint` | Ejecutar linters |
| `npm run format` | Formatear código |

---

## ⚠️ Importante

- Las variables de entorno deben comenzar con `VITE_`
- El archivo `.env` nunca se sube a Git
- Reinicia el servidor si cambias el `.env`
