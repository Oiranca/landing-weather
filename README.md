# HTML CSS Template

A clean and minimal HTML CSS template with organized folder structure and linting configuration for web development projects.

## 🌐 Language / Idioma

- [English](README.md) (Current)
- [Español](README_ES.md)

## 🚀 Features

- **Clean HTML5 structure** with semantic markup
- **Minimal CSS** with custom properties and responsive design
- **Organized folder structure** for scalable development
- **Linting tools** with ESLint, Prettier, HTMLHint, and Stylelint
- **Node.js configuration** with .nvmrc file

## 📁 Project Structure

```
HTML-CSS-Template/
├── assets/                 # Static assets
│   ├── fonts/             # Custom fonts
│   ├── icons/             # Icons and favicon
│   └── images/            # Images
├── docs/                  # Documentation
├── src/                   # Source files
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   └── js/                # JavaScript files (when needed)
├── index.html             # Main HTML file
├── package.json           # NPM configuration and scripts
├── .nvmrc                 # Node.js version
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .htmlhintrc            # HTMLHint configuration
├── .stylelintrc.json      # Stylelint configuration
└── README.md              # Project documentation
```

## 🛠️ Installation

1. **Clone or download the project**
2. **Ensure Node.js is installed** (version specified in .nvmrc)
3. **Install dependencies:**
   ```bash
   npm install
   ```

## 🔑 Environment Configuration

This project uses **Vite** as a bundler and a `.env` file to store sensitive configuration like API keys.

### Quick Setup

1. **Install dependencies first:**
   ```bash
   npm install
   ```

2. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

3. **Get your OpenWeather API Key:**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Create a free account
   - Copy your API key

4. **Configure your `.env` file:**
   ```
   VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
   ```
   
   ⚠️ **Important:** In Vite, all environment variables must start with `VITE_` prefix to be exposed to the client.

5. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   This will automatically open your browser at `http://localhost:3000`

📖 For detailed instructions, see [ENV_SETUP.md](ENV_SETUP.md)

## 📝 Available Scripts

### Linting

- `npm run lint` - Run all linters
- `npm run lint:html` - Lint HTML files
- `npm run lint:css` - Lint CSS files
- `npm run lint:js` - Lint JavaScript files

### Formatting

- `npm run format` - Format all files
- `npm run format:check` - Check formatting without modifying

### Development

- `npm start` or `npm run dev` - Development information

## 🎨 Customization

### CSS Variables

The `src/css/main.css` file includes customizable CSS variables:

```css
:root {
  --primary-color: #007bff;
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --spacing-md: 1rem;
  /* ... more variables */
}
```

### Linting Configuration

- **ESLint**: `eslint.config.js` - JavaScript rules
- **Prettier**: `.prettierrc` - Code formatting
- **HTMLHint**: `.htmlhintrc` - HTML validation
- **Stylelint**: `.stylelintrc.json` - CSS rules

## 📱 Responsive Design

The template includes responsive breakpoints:

- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile**: ≤ 480px

## 🔧 Development Tools

### Requirements

- Node.js (version in .nvmrc)
- npm or yarn

### Editor Configuration

Recommended VS Code extensions:

- ESLint
- Prettier
- HTMLHint
- Stylelint

## 📄 License

MIT - You can use this template freely for personal and commercial projects.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

If you have questions or need help:

- Open an issue in the repository
- Contact the project maintainer

---

Happy coding! 🎉
