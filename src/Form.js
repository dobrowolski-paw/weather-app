import React from "react";
import search from "./images/search.png";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <p>SPRAWDŹ POGODĘ</p>
      <input
        type="text"
        onChange={props.change}
        placeholder="wpisz swoją miejscowość"
      ></input>
      <button>
        <img src={search} style={{ height: "12px" }} />
      </button>
      <button onClick={props.changeParczew}>Parczew</button>
      <button onClick={props.changeRadomsko}>Radomsko</button>
      <button onClick={props.changeLomza}>Łomża</button>
    </form>
  );
};

export default Form;
