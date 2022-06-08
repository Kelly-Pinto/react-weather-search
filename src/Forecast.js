import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
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
