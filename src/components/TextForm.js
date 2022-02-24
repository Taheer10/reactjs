import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("This is the way to change state")

  const handleUpClick = () => {
    // console.log("Uppercase was Clicked" + text);
    // setText("This is the way to change state")

    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handledeleteClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-1" onClick={handlelowClick}>
          Convert to Lowcase
        </button>
        <button className="btn btn-danger mx-1" onClick={handledeleteClick}>
          Reset
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutest to read Words </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

// export const TextForm = () => {
//   const [input, setInput] = useState();

//   return (
//     <>
//       <input
//         type="text"
//         on
//         onChange={(e) => {
//           setInput(e.target.value.toUpperCase());
//         }}
//       />
//       {/* <button>Convert</button> */}
//       <p>{input}</p>
//     </>
//   );
// };
