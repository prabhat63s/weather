import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "d68d124bfe565bf5078788ede377b708"; // API key for OpenWeatherMap
  const [inputCity, setInputCity] = useState(""); // State for storing the input city name
  const [data, setData] = useState({}); // State for storing weather data

  // Function to fetch weather details for a given city

  const getWetherDetails = (cityName) => {
    if (!cityName) return; // Return early if the cityName is empty

    // Construct the API URL for fetching weather data.

    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;

    // Make a GET request to the OpenWeatherMap API

    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data); // Update the state with the response data.
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  // Event handler for input change

  const handleChangeInput = (e) => {
    // console.log("value", e.target.value);
    setInputCity(e.target.value); // Update the inputCity state with the new value
  };

  // Function handler for search button click

  const handleSearch = () => {
    getWetherDetails(inputCity); // Call the getWeatherDetails function with the input city.
  };

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Display weather information if data is available */}

      {Object.keys(data).length > 0 && (
        <div className="col-md-12 text-center mt-4">
          <div className="shadow rounded wetherResultBox p-5">
            <h5 className="weathorCity">{data?.name}</h5>
            <div className="detail mt-4 ">
              <div className="box">
                <h6 className="weathorTemp">
                  {(data?.main?.temp - 273.15).toFixed(2)}°C
                </h6>
                <p>Temperature</p>
              </div>
              <div className="box">
                <h6 className="weathorTemp">
                  {(data?.wind?.speed).toFixed(2)} mph
                </h6>
                <p>Wind Speed</p>
              </div>
              <div className="box">
                <h6 className="weathorTemp">
                  {(data?.main?.humidity).toFixed(2)} %
                </h6>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
