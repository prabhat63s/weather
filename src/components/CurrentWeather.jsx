import {
  WiDayCloudyGusts,
  WiHumidity,
  WiRainMix,
  WiWindy,
} from "react-icons/wi";

function CurrentWeather({ weatherData }) {
  // Destructure relevant data from weatherData
  const {
    current: {
      temp_c,
      condition,
      precip_mm,
      humidity,
      wind_kph,
      feelslike_c,
      last_updated,
    },
  } = weatherData || {}; // Safely destructure, default to empty object

  // Function to format the date string into a more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "long", day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options); // Format date according to US locale
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Current temperature and condition display */}
      <div className="bg-white rounded-xl border flex justify-between items-center p-4 shadow-lg hover:shadow-md">
        <div className="">
          <h3 className="text-2xl font-semibold">{temp_c}°C</h3>
          <p className="text-lg text-gray-700">{condition.text}</p>
          <p className="text-md text-gray-600">{formatDate(last_updated)}</p>
        </div>
        <div className="icon">
          <img
            src={condition.icon}
            alt={condition.text}
            className="w-16 h-16" // Weather condition icon
          />
        </div>
      </div>
      
      {/* Additional weather information cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Real Feels card */}
        <div className="bg-white rounded-xl border flex flex-col gap-2 items-center justify-center p-4 shadow-lg hover:shadow-md">
          Real Feels
          <p className="text-xl font-medium flex items-center gap-2">
            {feelslike_c}°C <WiDayCloudyGusts size={28} />
          </p>
        </div>
        {/* Wind Speed card */}
        <div className="bg-white rounded-xl border flex flex-col gap-2 items-center justify-center p-4 shadow-lg hover:shadow-md">
          Wind Speed
          <p className="text-xl font-medium flex items-center gap-2">
            {wind_kph} kph <WiWindy size={28} />
          </p>
        </div>
        {/* Humidity card */}
        <div className="bg-white rounded-xl border flex flex-col gap-2 items-center justify-center p-4 shadow-lg hover:shadow-md">
          Humidity
          <p className="text-xl font-medium flex items-center gap-2">
            {humidity}% <WiHumidity size={28} />
          </p>
        </div>
        {/* Precipitation card */}
        <div className="bg-white rounded-xl border flex flex-col gap-2 items-center justify-center p-4 shadow-lg hover:shadow-md">
          Precipitation
          <p className="text-xl font-medium flex items-center gap-2">
            {precip_mm} mm <WiRainMix size={28} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
