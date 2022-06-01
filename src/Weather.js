import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-app-wrapper">
      <form id="search-form" class="mb-3">
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              class="form-control"
              id="search-city-input"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <div className="City">
        <h1>New York</h1>
      </div>
      <div className="update">
        <p>
          Last updated on: <span>Wednesday 11:00 </span>
        </p>
      </div>

      <div className="Current">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="currentTempWrapper">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                  alt="clear"
                  className="currentConditionImage"
                  id="icon"
                />
                <p className="currentTemp">75</p>

                <span className="units">°F</span>
              </div>
            </div>

            <div class="col-6">
              <ul id="conditions">
                <li id="description"></li>
                <li>Precipitation: 25%</li>
                <li>
                  Humidity: <span id="humidity">10</span>%
                </li>
                <li>
                  Wind: <span>15</span>mph
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
