import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="weather-app-wrapper">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  id="search-city-input"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="City">
            <h1>New York</h1>
          </div>
          <div className="update">
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>

          <div className="Current">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="currentTempWrapper">
                    <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                      className="currentConditionImage"
                      id="icon"
                    />
                    <p className="currentTemp">
                      {Math.round(weatherData.temperature)}
                    </p>

                    <span className="units">°F</span>
                  </div>
                </div>

                <div className="col-6">
                  <ul className="conditions">
                    <li className="description"></li>
                    <li>
                      Humidity: <span>{weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{Math.round(weatherData.wind)}</span>mph
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Github">
          <small>
            <a href="https://github.com/Kelly-Pinto/weather-react">
              Open-source code
            </a>{" "}
            by Kelly Pinto
          </small>
        </div>
      </div>
    );
  } else {
    const apiKey = "42d967004f943c4e9a88d5763e34cc28";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
