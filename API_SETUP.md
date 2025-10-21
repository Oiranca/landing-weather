# Weather App - API Setup

## OpenWeather API Key Setup

To use this weather app, you need to:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Configure your environment variables

### Using .env file with Vite

1. **Install dependencies:**
```bash
npm install
```

2. **Create a `.env` file** in the project root:
```bash
cp .env.example .env
```

3. **Add your API key** to the `.env` file:
```bash
VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
```

**Important:** Variables must start with `VITE_` prefix to be exposed to the client.

## Usage

1. **Install dependencies:** `npm install`
2. **Set up your API key** in the `.env` file
3. **Start the dev server:** `npm run dev`
4. **Enter a city name** in the search input
5. **Click "Search"** or press Enter to get weather data

## Features

- **Modern tooling** - Vite for fast development
- **Environment variables** - Secure API key management with .env
- **Responsive design** that works on all devices
- **Real-time weather data** from OpenWeather API 2.5
- **Weather icons and dynamic backgrounds**
- **Clean, semantic HTML structure**
- **ES6 Modules** - Modern JavaScript

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linting checks
- `npm run format` - Format code with Prettier
