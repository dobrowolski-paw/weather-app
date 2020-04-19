import React, { Component } from "react";
import Form from "./Form";
import Rezult from "./Rezult";
import "./App.css";
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
    wind: "",
    pressure: "",
    err: false,
  };
  handlerImputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handlerCitySubmit = (e) => {
    e.preventDefault();
    console.log("potwierdzenie");
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${ApiKey}&units=metric`;
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Błąd");
      })
      .then((response) => response.json())
      .then((json) => {
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          date: time,
          city: this.state.value,
          sunrise: json.sys.sunrise,
          sunset: json.sys.sunset,
          temp: json.main.temp,
          wind: json.wind.speed,
          pressure: json.main.pressure,
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
        <Form
          value={this.state.value}
          change={this.handlerImputChange}
          submit={this.handlerCitySubmit}
        />
        ,
        <Rezult weather={this.state} />
      </div>
    );
  }
}

export default App;
