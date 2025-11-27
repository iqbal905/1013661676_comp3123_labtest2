import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === "") return;
        onSearch(city);
        setCity("");
    };

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="search-input"
                autoFocus
            />
            <button type="submit" className="search-btn">
                Search
            </button>
        </form>
    );
}

export default SearchBar;
