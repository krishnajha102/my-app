import React, { useState } from "react";

export default function TextForm(props) {
  const [text, changeText] = useState("");
  let updateText = (e) => {
    changeText(e.target.value);
  };
  let toUpCase = () => {
    changeText(text.toUpperCase());
    props.showAlert("changed to upper case", "success");
  };
  let toLowCase = () => {
    changeText(text.toLowerCase());
    props.showAlert("changed to lower case", "success");
  };
  let toCamelCase = () => {
    changeText(
      text
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "")
    );
    props.showAlert("changed to Camel case", "success");
  };
  return (
    <>
      <div
        className="container mb-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "grey",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <div className="container mb-3">
          <h1>{props.heading}</h1>
          <div className="mb3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              onChange={updateText}
              value={text}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "dark" ? "white" : "black",
              }}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={toUpCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={toLowCase}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={toCamelCase}>
            Convert to CamelCase
          </button>
        </div>
        <div
          className="container my-2"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2>Your Summary here</h2>
          <p>
            Total characters: {text.length}
            <br></br>
            Total Words: {text.split(" ").length}
            <br></br>
            Total time to read: {0.008 * text.split(" ").length}
          </p>
        </div>
      </div>
    </>
  );
}
