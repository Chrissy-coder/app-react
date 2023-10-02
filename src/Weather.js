import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Auckland",
    temperature: "12",
    date: "Sunday 8:34",
    description: "Cloudy",
    img: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 83,
    wind: 2,
  };

  return (
    <div className="Weather">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            autofocus="on"
            autocomplete="off"
            id="city-input"
            className="form-control shadow-sm"
          />
          </div>
          <input type="submit" value="Search" className="btn btn-success" />
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-right">
              <img
                src={weatherData.img}
                alt={weatherData.description}
                className="float-left"
              />
              <span>{weatherData.temperature}</span>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>

      <span className="line"></span>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
