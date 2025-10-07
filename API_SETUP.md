# Weather App - API Setup

## OpenWeather API Key Setup

To use this weather app, you need to:

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Add your API key using one of these methods:

### Method 1: Using .env file (Recommended)
Create a `.env` file in the project root:
```bash
OPENWEATHER_API_KEY=your_actual_api_key_here
```

### Method 2: Direct configuration
Edit `src/js/config.js` and replace `'your_api_key_here'` with your actual API key:
```javascript
const CONFIG = {
  OPENWEATHER_API_KEY: 'your_actual_api_key_here'
};
```

## Usage

1. **Set up your API key** using one of the methods above
2. **Open `index.html`** directly in your browser (no server needed!)
3. **Enter a city name** in the search input
4. **Click "Search"** or press Enter to get weather data

## Features

- **Pure Vanilla JavaScript** - No frameworks or build tools required
- **Responsive design** that works on all devices
- **Real-time weather data** from OpenWeather API 2.5
- **Weather icons and dynamic backgrounds**
- **Clean, semantic HTML structure**
- **SCSS-like nested CSS organization**
- **Environment variable support** for secure API key management
- **No server required** - works with direct file access

## Development

- `npm run lint` - Run linting checks
- `npm run format` - Format code with Prettier
- Open `index.html` directly in browser for development
