import { MdLocationPin } from "react-icons/md";

function CityDisplay({ city, country, condition }) {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex flex-col items-center">
        {/* City and Country Information */}
        <h2 className="text-3xl font-medium flex items-center gap-2">
          <MdLocationPin /> {city}, {country}
        </h2>
        {/* Weather Condition Text */}
        <p className="text-md text-gray-600">{condition.text}</p>
      </div>
    </div>
  );
}

export default CityDisplay;
