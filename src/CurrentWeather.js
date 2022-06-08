import React from "react";
import FormattedDate from "./FormattedDate";
import CurrentTemperature from "./CurrentTemperature";
import Forecast from "./Forecast";

export default function CurrentWeather(props) {
  return (
    <div>
      <div className="currentWeather">
        <div className="City">
          <h1>{props.data.city}</h1>
        </div>

        <div className="update">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>

        <div className="Current">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="currentTempWrapper">
                  <img
                    src={props.data.iconUrl}
                    alt={props.data.description}
                    className="currentConditionImage"
                  />
                  <CurrentTemperature temperature={props.data.temperature} />
                </div>
              </div>

              <div className="col-6">
                <ul className="conditions">
                  <li className="description"></li>
                  <li>
                    Humidity: <span>{props.data.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{Math.round(props.data.wind)}</span>mph
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Forecast icon={props.data.iconUrl} />
      </div>
    </div>
  );
}
