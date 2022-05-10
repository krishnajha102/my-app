import React, { useState } from "react";

export default function TextForm(props) {
  const [text, changeText] = useState("");
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
        <button className="btn btn-primary mx-2 my-2" onClick={toUpCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={toLowCase}>
          Convert to LowerCase
        </button>
      </div>
      <div className="container my-2">
        <h2>Your Summary here</h2>
        <p>
          Total characters: {text.length}
          <br></br>
          Total Words: {text.split(" ").length}
          <br></br>
          Total time to read: {0.008 * text.split(" ").length}
        </p>
      </div>
    </>
  );
}
