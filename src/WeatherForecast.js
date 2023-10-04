import React, {useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [ForecastReady, setForecastReady] = useState (false);
  let [forecast, setForecast] = useState(null);
 
  function handleResponse(response) {
    setForecast(response.data.daily);
    setForecastReady(true);
  }

  if (ForecastReady) {
    console.log(forecast)
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]}/>
          </div>
        </div>
      </div>
    );

  } else {
  let apiKey = "97f8e93f00107773f88eafd933ce86b7";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  }
}


    