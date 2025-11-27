import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import WeeklyForecast from "./WeeklyForecast";
import "./App.css";

function App() {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);

    // Replace with your valid API key
    const API_KEY = "4281127730cdb3880e5fed3283869952";

    const getWeather = async (city) => {
        try {
            // Fetch CURRENT weather
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const currentData = await response.json();

            // If city not found or API error
            if (!currentData || currentData.cod !== 200) {
                setWeather(null);
                setForecast([]);
                alert("City not found. Try another search.");
                return;
            }

            setWeather(currentData);

            // Fetch WEEKLY FORECAST
            const { lat, lon } = currentData.coord;

            const weekResponse = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${API_KEY}&units=metric`
            );
            const weekData = await weekResponse.json();

            if (weekData.daily) {
                setForecast(weekData.daily);
            } else {
                setForecast([]);
            }

        } catch (error) {
            console.log("Error fetching weather:", error);
            setWeather(null);
            setForecast([]);
        }
    };

    return (
        <div className="app">
            <h1 className="title">Weather App</h1>
            <SearchBar onSearch={getWeather} />

            {/* Show this BEFORE any search */}
            {!weather && (
                <p style={{ marginTop: "20px", fontSize: "18px", color: "#555" }}>
                    Search a city!
                </p>
            )}

            {/* Show weather AFTER search */}
            {weather && <WeatherCard weather={weather} />}

            {/* Show forecast only AFTER weather loads */}
            {forecast.length > 0 && <WeeklyForecast days={forecast} />}
        </div>
    );
}

export default App;
