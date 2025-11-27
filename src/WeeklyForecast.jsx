import React from "react";

function WeeklyForecast({ days }) {
    if (!days || !Array.isArray(days) || days.length === 0) {
        return null;
    }

    return (
        <div className="week-container">
            {days.slice(0, 7).map((day, index) => (
                <div key={index} className="day-card">
                    <p><strong>{new Date(day.dt * 1000).toLocaleDateString()}</strong></p>

                    <img
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt="icon"
                    />

                    <p>Day: {Math.round(day.temp.day)}°C</p>
                    <p>Night: {Math.round(day.temp.night)}°C</p>
                    <p>{day.weather[0].description}</p>
                </div>
            ))}
        </div>
    );
}

export default WeeklyForecast;
