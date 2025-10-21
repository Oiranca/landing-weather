class WeatherApp {
  constructor() {
    this.apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.weatherIcons = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '☁️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '❄️',
      '13n': '❄️',
      '50d': '🌫️',
      '50n': '🌫️'
    };
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.checkApiKey();
  }

  checkApiKey() {
    if (!this.apiKey || this.apiKey === 'your_api_key_here') {
      this.showError('API key not configured. Please add your OpenWeather API key to the .env file.');
      return false;
    }
    return true;
  }

  bindEvents() {
    const form = document.getElementById('weatherForm');
    const cityInput = document.getElementById('cityInput');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSearch();
    });

    cityInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.handleSearch();
      }
    });
  }

  async handleSearch() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();

    if (!city) {
      this.showError('Please enter a city name.');
      return;
    }

    if (!this.checkApiKey()) {
      return;
    }

    this.showLoading();
    await this.fetchWeatherData(city);
  }

  showLoading() {
    const button = document.querySelector('.search-form__button');
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> Loading...';
    button.disabled = true;
    
    button.dataset.originalText = originalText;
  }

  hideLoading() {
    const button = document.querySelector('.search-form__button');
    const originalText = button.dataset.originalText;
    button.innerHTML = originalText;
    button.disabled = false;
  }

  async fetchWeatherData(city) {
    try {
      const url = `${this.baseUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`;
      
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch weather data');
      }

      this.displayWeatherData(data);
      this.hideError();
    } catch (error) {
      console.error('Error fetching weather data:', error);
      this.showError(error.message);
    } finally {
      this.hideLoading();
    }
  }

  displayWeatherData(data) {
    const weatherSection = document.getElementById('weatherSection');
    const mainElement = document.querySelector('.weather-card__main');
    
    this.updateWeatherInfo(data);
    this.updateWeatherBackground(data.weather[0].main);
    this.updateWeatherIcon(data.weather[0].icon);
    
    weatherSection.style.display = 'block';
    weatherSection.classList.add('fade-in');
  }

  updateWeatherInfo(data) {
    const elements = {
      cityName: document.getElementById('cityName'),
      countryName: document.getElementById('countryName'),
      temperature: document.getElementById('temperature'),
      weatherDescription: document.getElementById('weatherDescription'),
      humidity: document.getElementById('humidity'),
      pressure: document.getElementById('pressure'),
      windSpeed: document.getElementById('windSpeed'),
      feelsLike: document.getElementById('feelsLike')
    };

    elements.cityName.textContent = data.name;
    elements.countryName.textContent = data.sys.country;
    elements.temperature.textContent = Math.round(data.main.temp);
    elements.weatherDescription.textContent = data.weather[0].description;
    elements.humidity.textContent = `${data.main.humidity}%`;
    elements.pressure.textContent = `${data.main.pressure} hPa`;
    elements.windSpeed.textContent = `${data.wind.speed} m/s`;
    elements.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
  }

  updateWeatherBackground(weatherMain) {
    const mainElement = document.querySelector('.weather-card__main');
    
    mainElement.className = 'weather-card__main';
    
    switch (weatherMain.toLowerCase()) {
      case 'clouds':
        mainElement.classList.add('cloudy');
        break;
      case 'rain':
      case 'drizzle':
        mainElement.classList.add('rainy');
        break;
      case 'snow':
        mainElement.classList.add('snowy');
        break;
      default:
        break;
    }
  }

  updateWeatherIcon(iconCode) {
    const iconElement = document.getElementById('weatherIcon');
    const icon = this.weatherIcons[iconCode] || '🌤️';
    iconElement.textContent = icon;
  }

  showError(message) {
    const errorSection = document.getElementById('errorSection');
    const errorMessage = document.getElementById('errorMessage');
    const weatherSection = document.getElementById('weatherSection');
    
    errorMessage.textContent = message;
    errorSection.style.display = 'block';
    weatherSection.style.display = 'none';
    errorSection.classList.add('fade-in');
  }

  hideError() {
    const errorSection = document.getElementById('errorSection');
    errorSection.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const weatherApp = new WeatherApp();
  
  window.weatherApp = weatherApp;
});

window.setApiKey = function(apiKey) {
  if (window.weatherApp) {
    window.weatherApp.apiKey = apiKey;
    console.log('API key set successfully');
  } else {
    console.error('Weather app not initialized');
  }
};
