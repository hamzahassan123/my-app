import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [copySuccess, setCopySuccess] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let temp = document.getElementById('myBox');
    temp.select();
    navigator.clipboard.writeText(temp.value)

  }
  return (
    <div>
      <div className="container" >
        <h1>{props.heading} </h1>
        <div className="mb-3" >
          <textarea className="form-control"  id="myBox" value={text} onChange={handleOnChange} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text </button>

        <div className="container2 my-2" >
          <h2> Your text summary </h2>
          <p> {text.split(" ").length} Words and {text.length} Character </p>
          <p> {0.008 * text.split(" ").length}Minutes reads</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}