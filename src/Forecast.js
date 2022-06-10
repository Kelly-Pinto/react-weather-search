import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let lat = props.coords.lat;
  let lon = props.coords.lon;

  let apiKey = "42d967004f943c4e9a88d5763e34cc28";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  function handleResponse() {
    console.log(apiUrl);
    console.log(props.coords);
  }

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row">
      <div className="col-2">
        <div className="forecastDay">Sun</div>
        <img src={props.icon} alt="weather icon" className="forecastIcon"></img>
        <div className="weatherForecastTemperatures">
          <span className="forecastTempMax">80° </span>
          <span className="forecastTempMin"> 65°</span>
        </div>
      </div>
    </div>
  );
}
