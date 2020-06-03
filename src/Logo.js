import React from "react";
import sun from "./images/sun.png";
const Logo = () => {
  return (
    <a href="https://pawwel3.github.io/weather-app/">
      <img
        className="App-logo"
        src={sun}
        alt="słońce"
        style={{ float: "left" }}
      ></img>
      <p style={{ color: "gray", float: "left" }}>miecio</p>
      <p style={{ color: "rgb(241, 168, 10", float: "left" }}>pogoda</p>
      <p style={{ color: "rgb(224, 220, 220)" }}>.pl</p>
    </a>
  );
};

export default Logo;
