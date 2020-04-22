import React from "react";
import sunRise from "./images/moon.png";
import cloud from "./images/cloud.png";
import sunIcon from "./images/sunIcon.png";
import cloudSun from "./images/cloudSun.png";
import rainBrCl from "./images/rainBrokenClouds.png";
import rainSunBrCl from "./images/rainSunBrokenClouds.png";
import snowing from "./images/snowing.png";
import snowingSun from "./images/snowingSun.png";
import storm from "./images/storm.png";
import stormSun from "./images/stormSun.png";

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
    weatherIconCode,
    err,
  } = props.weather;
  console.log(wind);
  let content = null;
  let tempp = Math.floor(temp);
  let tempFeelsLikee = Math.floor(tempFeelsLike);
  let weatherIcon = null;
  if (weatherIconCode === "01d") {
    weatherIcon = sunIcon;
  } else if (weatherIconCode === "02d") {
    weatherIcon = cloudSun;
  } else if (weatherIconCode === "03d") {
    weatherIcon = cloud;
  } else if (weatherIconCode === "04d") {
    weatherIcon = storm;
  } else if (weatherIconCode === "13d") {
    weatherIcon = snowingSun;
  } else if (weatherIconCode === "09d") {
    weatherIcon = rainSunBrCl;
  } else if (weatherIconCode === "10d" || "11d" || "12d") {
    weatherIcon = rainBrCl;
  } else {
    weatherIcon = snowing;
  }

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
            <img src={weatherIcon} />
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
