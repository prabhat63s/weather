import { WiSunrise, WiSunset } from "react-icons/wi";

function ForecastCard({ date, tempMin, tempMax, condition, astro }) {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg hover:shadow-md bg-white rounded-lg border border-gray-200 p-4 gap-2">
      {/* Date */}
      <h4 className="text-lg font-semibold text-gray-800">
        {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}
      </h4>

      {/* Weather Condition */}
      <div className="flex items-center gap-2">
        <img src={condition.icon} alt={condition.text} className="w-8 h-8" />
        <p className="text-md text-gray-600">{condition.text}</p>
      </div>

      {/* Temperature Range */}
      <p className="text-lg font-medium">
        {tempMin}°C / {tempMax}°C{" "}
      </p>

      {/* Sunrise and Sunset */}
      <div className="flex items-center justify-center gap-4 mt-2">
        <div className="flex items-center gap-1">
          <WiSunrise size={24} className="text-yellow-500" />
          <p className="text-sm text-gray-600">{astro.sunrise}</p>
        </div>
        <div className="flex items-center gap-1">
          <WiSunset size={24} className="text-orange-500" />
          <p className="text-sm text-gray-600">{astro.sunset}</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
