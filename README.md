```markdown
# Weather Forecast Application

This is a weather forecast application built with React that provides real-time weather data and a five-day forecast for any city.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Assumptions](#assumptions)
- [Usage](#usage)
- [Live Demo](#live-demo)

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prabhat63s/weather.git
   cd weather-app
   ```

2. **Install Dependencies**:
   Make sure you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

3. **Add Environment Variables**:
   Create a `.env` file in the root directory of the project and add your WeatherAPI key:
   ```
   VITE_API_KEY=dfec095a79444ca2882173540242109
   ```

4. **Run the Project**:
   Start the development server:
   ```bash
   npm run dev
   ```
   Your application should be running on `http://localhost:5173`.

## Assumptions

- The user has an active internet connection to fetch weather data.
- The application relies on the WeatherAPI service, so the API key must be valid.
- Basic knowledge of React and JavaScript is assumed for understanding the codebase.

## Usage

- When you open the application, it defaults to displaying the weather for **Noida**.
- You can search for any city by clicking the search icon and entering the city name.
- The application displays the current weather, including temperature, condition, humidity, wind speed, and precipitation.
- A five-day forecast is provided below the current weather data.

## Live Demo

You can test the application online at the following link:
[Weather Forecast Application](https://weather-seven-delta-54.vercel.app)

Feel free to reach out if you have any questions or feedback!
```