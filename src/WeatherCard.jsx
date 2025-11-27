import React from "react";

function WeatherCard({ weather }) {
    const iconCode = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <div className="card">
            <h2>{weather.name}</h2>
            <img src={iconUrl} alt="weather icon" />

            <h3>{Math.round(weather.main.temp)}°C</h3>
            <p>{weather.weather[0].description}</p>

            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherCard;
