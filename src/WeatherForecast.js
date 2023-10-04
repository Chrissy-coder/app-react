import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
console.log(response.data);
}
    let apiKey = "97f8e93f00107773f88eafd933ce86b7";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="ForecastTemperature">
            <span className="Forecast-max-temp">19°</span>
            <span className="Forecast-min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
