import React from "react";

export default function CurrentTemperature(props) {
  return (
    <span>
      <p className="currentTemp">{Math.round(props.temperature)}</p>

      <span className="units">°F </span>
    </span>
  );
}
