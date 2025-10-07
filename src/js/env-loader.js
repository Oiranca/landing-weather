class EnvLoader {
  constructor() {
    this.env = {};
    this.loadEnv();
  }

  async loadEnv() {
    try {
      const response = await fetch('.env');
      if (response.ok) {
        const text = await response.text();
        this.parseEnv(text);
      }
    } catch (error) {
      console.warn('Could not load .env file, using fallback config');
    }
  }

  parseEnv(text) {
    const lines = text.split('\n');
    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          this.env[key.trim()] = valueParts.join('=').trim();
        }
      }
    });
  }

  get(key) {
    return this.env[key] || CONFIG[key] || '';
  }
}

const envLoader = new EnvLoader();
