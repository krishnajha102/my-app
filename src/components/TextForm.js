import React, { useState } from "react";

export default function TextForm(props) {
  const [text, changeText] = useState();
  let updateText = (e) => {
    changeText(e.target.value);
  };
  let toUpCase = () => {
    changeText(text.toUpperCase());
  };
  let toLowCase = () => {
    changeText(text.toLowerCase());
  };
  return (
    <>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <div className="mb3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={updateText}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={toUpCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={toLowCase}>
          Convert to LowerCase
        </button>
      </div>
    </>
  );
}
