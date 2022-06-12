import React from "react";

export default function ForecastDay(props) {
  let iconURL = `http://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }

  function tempMax() {
    let tempMax = Math.round(props.forecastData.temp.max);
    return `${tempMax}°`;
  }

  function tempMin() {
    let tempMin = Math.round(props.forecastData.temp.min);
    return `${tempMin}°`;
  }

  return (
    <div className="col-2">
      <div className="forecastDay">{day()}</div>
      <img src={iconURL} alt="weather icon" className="forecastIcon"></img>
      <div className="weatherForecastTemperatures">
        <span className="forecastTempMax"> {tempMax()} </span>
        <span className="forecastTempMin"> {tempMin()}</span>
      </div>
    </div>
  );
}
