import React, { Component } from "react";
import Form from "./Form";
import Rezult from "./Rezult";
import "./App.css";
import Logo from "./Logo";

//klucz do API
const ApiKey = "a30dc76c8a569467302ffb89eaaea2ec";
class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    tempFeelsLike: "",
    wind: "",
    pressure: "",
    err: false,
    weatherIconCode: "",
  };
  handlerImputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handlerValueParczew = (e) => {
    this.setState({
      value: "Parczew",
    });
  };
  handlerValueRadomsko = (e) => {
    this.setState({
      value: "Radomsko",
    });
  };
  handlerValueLomza = (e) => {
    this.setState({
      value: "Łomża",
    });
  };
  handlerValueWawa = (e) => {
    this.setState({
      value: "Warszawa",
    });
  };
  handlerCitySubmit = (e) => {
    e.preventDefault();
    console.log("potwierdzenie");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${ApiKey}&units=metric`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Błąd");
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          date: time,
          city: this.state.value,
          sunrise: json.sys.sunrise,
          sunset: json.sys.sunset,
          temp: json.main.temp,
          tempFeelsLike: json.main.feels_like,
          wind: json.wind.speed,
          pressure: json.main.pressure,
          weatherIconCode: json.weather[0].icon,
        });
      })
      .catch((er) => {
        this.setState({
          err: true,
          city: this.state.value,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header>
          <Logo />
        </header>
        <div className="weather">
          <Form
            value={this.state.value}
            change={this.handlerImputChange}
            submit={this.handlerCitySubmit}
            changeParczew={this.handlerValueParczew}
            changeRadomsko={this.handlerValueRadomsko}
            changeLomza={this.handlerValueLomza}
            changeWawa={this.handlerValueWawa}
          />
          <Rezult className="rezult" weather={this.state} />
        </div>
        ,
      </div>
    );
  }
}

export default App;
