import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCase = () => {
    if (text.length === 0) {
      props.alert("Write Something First", "Danger");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
      props.alert("Everything Converted to Upper-case", "Success");
    }
  };
  const handleLowerCase = () => {
    if (text.length === 0) {
      props.alert("Write Something First", "Danger");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.alert("Everything Converted to Lower-case", "Success");
    }
  };

  const handleFirstCaseCap = () => {
    if (text.length === 0) {
      props.alert("Write Something First", "Danger");
    } else {
      let newText = text[0].toUpperCase() + text.slice(1);
      setText(newText);
      props.alert("First Case has been converted to upper", "Success");
    }
  };

  const handleRemSp = () => {
    if (text.length === 0) {
      props.alert("Write Something First", "Danger");
    } else {
      let newText = "";
      let flag = 0;
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
          newText += text[i];
          flag++;
        } else {
          if (flag > 0) {
            newText += " ";
          }
          flag = 0;
        }
      }

      setText(newText);
      props.alert("Extra Spaces have been removed", "Success");
    }
  };

  const handleTitleCase = () => {
    if (text.length === 0) {
      props.alert("Write Something First", "Danger");
    } else {
        let st = text[0].toUpperCase();
        for (let i = 1; i < text.length; i++) {
        if ((text[i] === " ") & (i + 1 < text.length)) {
          st += " ";
          st += text[i + 1].toUpperCase();
          i++;
        } else {
          st += text[i];
        }
      }

      setText(st);
      props.alert("Converted to Title Case", "Success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert To Upper-Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert To Lower-Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleFirstCaseCap}>
          Capitalize First Letter
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemSp}>
          Remove Spaces
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleTitleCase}
        >
           Title-Case 
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {" "}
          {text.length === 0 ? 0 : text.split(" ").length} Words , {text.length}{" "}
          Characters
        </p>

        <p>
          Time To Read :{" "}
          {text.length === 0 ? 0 : text.split(" ").length * 0.008} Minutes
        </p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : <i>"Write Something"</i>}</p>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "Enter the Heading",
};
