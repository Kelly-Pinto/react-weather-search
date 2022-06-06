import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function setCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        <p className="currentTemp">{Math.round(props.temperature)}</p>

        <span className="units">
          <a href="/" onClick={setFahrenheit}>
            °F
          </a>
          |
          <a href="/" onClick={setCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <p className="currentTemp">
          {Math.round(((props.temperature - 32) * 5) / 9)}
        </p>

        <span className="units">
          <a href="/" onClick={setFahrenheit}>
            °F
          </a>
          |
          <a href="/" onClick={setCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  }
}
