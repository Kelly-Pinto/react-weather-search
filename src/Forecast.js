import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        <ForecastDay forecastData={forecast[0]} />
        <ForecastDay forecastData={forecast[1]} />
        <ForecastDay forecastData={forecast[2]} />
        <ForecastDay forecastData={forecast[3]} />
        <ForecastDay forecastData={forecast[4]} />
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiKey = "42d967004f943c4e9a88d5763e34cc28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
