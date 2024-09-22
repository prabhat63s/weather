import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CityDisplay from "./components/CityDisplay";
import CurrentWeather from "./components/CurrentWeather";
import SearchCity from "./components/SearchCity";
import ForecastCard from "./components/ForecastCard";
import { MdClose, MdSearch } from "react-icons/md";

// Fetch API key from environment variables
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  // State to hold the selected city and weather data
  const [city, setCity] = useState("Noida");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [showSearch, setShowSearch] = useState(false); // Toggle search visibility
  const [error, setError] = useState(""); // Store error messages

  // Fetch weather and forecast data whenever the city changes
  useEffect(() => {
    fetchWeatherData(city);
    fetchForecastData(city);
  }, [city]);

  // Function to fetch current weather data for the selected city
  const fetchWeatherData = async (city) => {
    try {
      setError(""); // Reset error state
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeatherData(response.data); // Set weather data
      console.log(response.data); // Log response data
    } catch (error) {
      // Handle errors and set appropriate error message
      if (error.response && error.response.status === 400) {
        setError("City not found. Please try another city.");
      } else {
        setError("Network error. Please try again later.");
      }
      setWeatherData(null); // Reset weather data on error
    }
  };

  // Function to fetch 5-day weather forecast for the selected city
  const fetchForecastData = async (city) => {
    try {
      setError(""); // Reset error state
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`
      );
      setForecastData(response.data.forecast.forecastday); // Set forecast data
      console.log(response.data.forecast.forecastday); // Log forecast data
    } catch (error) {
      // Handle errors and set appropriate error message
      if (error.response && error.response.status === 400) {
        setError("City not found. Please try another city.");
      } else {
        setError("Network error. Please try again later.");
      }
      setForecastData(null); // Reset forecast data on error
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="w-full h-[10vh] flex items-center justify-between border-b border-blue-200">
        <div className="lg:max-w-7xl w-full mx-auto p-4">
          {showSearch ? (
            // Render search input when showSearch is true
            <div className="w-full flex items-center justify-between">
              <SearchCity setCity={setCity} />
              <button
                className="block lg:hidden ml-2"
                onClick={() => setShowSearch(false)} // Close search
              >
                <MdClose size={28} />
              </button>
            </div>
          ) : (
            // Render title and search button when showSearch is false
            <div className="w-full flex items-center justify-between">
              <h1 className="text-2xl lg:font-semibold">Weather Forecast</h1>
              <button
                className="block lg:hidden"
                onClick={() => setShowSearch(true)} // Open search
              >
                <MdSearch size={28} />
              </button>
              <div className="hidden lg:block">
                <SearchCity setCity={setCity} />{" "}
                {/* Always show search on large screens */}
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="lg:max-w-7xl w-full lg:min-h-[80vh] mx-auto p-4">
        {/* Show error message if present */}
        {error && (
          <div className=" h-full text-center items-center flex justify-center">
            <p className="text-gray-800 text-4xl font-medium">{error}</p>
          </div>
        )}
        {!error && weatherData && (
          <>
            {/* Display city and weather condition */}
            <CityDisplay
              city={weatherData.location.name}
              country={weatherData.location.country}
              condition={{
                icon: weatherData.current.condition.icon,
                text: weatherData.current.condition.text,
              }}
            />

            {/* Display current weather details */}
            {weatherData && <CurrentWeather weatherData={weatherData} />}

            <div className="my-5">
              <h1 className="py-1 mb-5 w-fit text-xl font-medium border-b-4">
                Five-Day Forecast
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {forecastData &&
                  forecastData.map((day, index) => (
                    // Render forecast cards for each day
                    <ForecastCard
                      key={index}
                      date={day.date}
                      tempMin={day.day.mintemp_c}
                      tempMax={day.day.maxtemp_c}
                      condition={{
                        icon: day.day.condition.icon,
                        text: day.day.condition.text,
                      }}
                      astro={day.astro}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>

      <footer className="w-full h-[10vh] flex items-center text-center justify-between border-t border-blue-200">
        <div className="lg:max-w-7xl w-full mx-auto p-4">
          Made with 🖤{" "}
          <a
            href="https://prabhat-singh-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Prabhat Singh
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
