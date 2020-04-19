import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        onChange={props.change}
        placeholder="Wpisz maiasto.."
      ></input>
      <button>Wyszukaj miasto</button>
    </form>
  );
};

export default Form;
