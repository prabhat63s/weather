import { useState } from "react";

const SearchCity = ({ setCity }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // List of cities with country information
  const cityList = [
    { name: "Mumbai", country: "India" },
    { name: "Delhi", country: "India" },
    { name: "Bangalore", country: "India" },
    { name: "Hyderabad", country: "India" },
    { name: "Ahmedabad", country: "India" },
    { name: "Chennai", country: "India" },
    { name: "Kolkata", country: "India" },
    { name: "Pune", country: "India" },
    { name: "Jaipur", country: "India" },
    { name: "Surat", country: "India" },
    { name: "Lucknow", country: "India" },
    { name: "Kanpur", country: "India" },
    { name: "Nagpur", country: "India" },
    { name: "Indore", country: "India" },
    { name: "Thane", country: "India" },
    { name: "Bhopal", country: "India" },
    { name: "Visakhapatnam", country: "India" },
    { name: "Pimpri-Chinchwad", country: "India" },
    { name: "Patna", country: "India" },
    { name: "Vadodara", country: "India" },
    { name: "Ghaziabad", country: "India" },
    { name: "Ludhiana", country: "India" },
    { name: "Agra", country: "India" },
    { name: "Nashik", country: "India" },
    { name: "Faridabad", country: "India" },
    { name: "Meerut", country: "India" },
    { name: "Rajkot", country: "India" },
    { name: "Kalyan-Dombivli", country: "India" },
    { name: "Vasai-Virar", country: "India" },
    { name: "Varanasi", country: "India" },
    { name: "Srinagar", country: "India" },
    { name: "Aurangabad", country: "India" },
    { name: "Dhanbad", country: "India" },
    { name: "Amritsar", country: "India" },
    { name: "Navi Mumbai", country: "India" },
    { name: "Allahabad", country: "India" },
    { name: "Howrah", country: "India" },
    { name: "Gwalior", country: "India" },
    { name: "Ranchi", country: "India" },
    { name: "Jodhpur", country: "India" },
    { name: "Coimbatore", country: "India" },
    { name: "Vijayawada", country: "India" },
    { name: "Jabalpur", country: "India" },
    { name: "Madurai", country: "India" },
    { name: "Raipur", country: "India" },
    { name: "Kota", country: "India" },
    { name: "Guwahati", country: "India" },
    { name: "Chandigarh", country: "India" },
    { name: "Solapur", country: "India" },
    { name: "Hubli-Dharwad", country: "India" },
    { name: "Bareilly", country: "India" },
    { name: "Mysore", country: "India" },
    { name: "Tiruchirappalli", country: "India" },
    { name: "Tiruppur", country: "India" },
    { name: "Moradabad", country: "India" },
    { name: "Gurgaon", country: "India" },
    { name: "Aligarh", country: "India" },
    { name: "Jalandhar", country: "India" },
    { name: "Bhubaneswar", country: "India" },
    { name: "Salem", country: "India" },
    { name: "Warangal", country: "India" },
    { name: "Guntur", country: "India" },
    { name: "Bhiwandi", country: "India" },
    { name: "Saharanpur", country: "India" },
    { name: "Gorakhpur", country: "India" },
    { name: "Bikaner", country: "India" },
    { name: "Amravati", country: "India" },
    { name: "Noida", country: "India" },
    { name: "Jamshedpur", country: "India" },
    { name: "Bhilai", country: "India" },
    { name: "Cuttack", country: "India" },
    { name: "Firozabad", country: "India" },
    { name: "Kochi", country: "India" },
    { name: "Nellore", country: "India" },
    { name: "Bhavnagar", country: "India" },
    { name: "Dehradun", country: "India" },
    { name: "Durgapur", country: "India" },
    { name: "Asansol", country: "India" },
    { name: "Rourkela", country: "India" },
    { name: "Nanded", country: "India" },
    { name: "Kolhapur", country: "India" },
    { name: "Ajmer", country: "India" },
    { name: "Akola", country: "India" },
    { name: "Gulbarga", country: "India" },
    { name: "Jamnagar", country: "India" },
    { name: "Ujjain", country: "India" },
    { name: "Loni", country: "India" },
    { name: "Siliguri", country: "India" },
    { name: "Jhansi", country: "India" },
    { name: "Ulhasnagar", country: "India" },
    { name: "Nellore", country: "India" },
    { name: "Belgaum", country: "India" },
    { name: "Mangalore", country: "India" },
    { name: "Gaya", country: "India" },
    { name: "Jalgaon", country: "India" },
    { name: "Udaipur", country: "India" },
    { name: "Maheshtala", country: "India" },
    { name: "Tirunelveli", country: "India" },
    { name: "Malegaon", country: "India" },
    { name: "Tirupati", country: "India" },
    { name: "Gopalpur", country: "India" },
    { name: "Sangli", country: "India" },
    { name: "Bardhaman", country: "India" },
    { name: "Navsari", country: "India" },
    { name: "Tenali", country: "India" },
    { name: "Madhyamgram", country: "India" },
    { name: "Thanjavur", country: "India" },
    { name: "Pondicherry", country: "India" },
  ];

  // Handler for input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update the input value state
    if (value.length > 0) {
      // Filter cities based on user input
      const filteredSuggestions = cityList.filter((city) =>
        city.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions); // Update suggestions state
      setShowSuggestions(true); // Show suggestions dropdown
    } else {
      setShowSuggestions(false); // Hide suggestions if input is empty
    }
  };

  // Handler for clicking a city suggestion
  const handleCityClick = (city) => {
    setCity(`${city.name}, ${city.country}`); // Set the selected city and country
    setInputValue(city.name); // Update input value with selected city name
    setShowSuggestions(false); // Hide suggestions dropdown
  };

  return (
    <div className="relative w-full lg:w-96">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full py-2 border border-gray-300 bg-white rounded-full px-4"
        placeholder="Search city..."
      />
      {showSuggestions && (
        <ul className="absolute z-10 w-full border border-blue-200 bg-white rounded-lg shadow-xl mt-1 max-h-48 overflow-y-auto">
          {suggestions.length > 0 ? (
            suggestions.map((city, index) => (
              <li
                key={index}
                onClick={() => handleCityClick(city)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {city.name}, {city.country}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No cities found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchCity;
