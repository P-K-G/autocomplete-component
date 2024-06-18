import React, { useState } from 'react';

const SearchView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setSearchTerm(city);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        {filteredCities.length > 0 ? (
          filteredCities.map((city, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white rounded-md shadow-sm mb-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleCityClick(city)}
            >
              {city}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No cities found.</div>
        )}
      </div>
      <div className="text-lg font-semibold">
        Selected City: {selectedCity}
      </div>
    </div>
  );
};

export default SearchView;