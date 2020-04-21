import React from "react";
import sunRise from "./images/moon.png";
import cloud from "./images/cloud.png";
import sunIcon from "./images/sunIcon.png";

const Rezult = (props) => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    tempFeelsLike,
    wind,
    pressure,
    err,
  } = props.weather;
  let content = null;
  let tempp = Math.floor(temp);
  let tempFeelsLikee = Math.floor(tempFeelsLike);

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div className="rezult">
        <div className="city">{city}</div>
        <div className="dateSunrize">
          <div className="date">Teraz {date}</div>
          <div className="sunrise">
            <img src={sunRise} />
            {sunriseTime} - {sunsetTime}
          </div>
        </div>
        <div className="imgTempWind">
          <div className="img">
            <img src={sunIcon} />
          </div>
          <div className="temp">
            {tempp}&#176;C
            <p>Temperatura odczuwalna {tempFeelsLikee}&#176;C</p>
          </div>
          <div className="windPress">
            <div className="pressure">Ciśnienie {pressure}hPa</div>
            <div className="wind">Prędkość wiatru {wind}m/s</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="result">
      {err ? `Nie mamy w bazie miasta ${city}` : content}
    </div>
  );
};

export default Rezult;
