import { useState } from "react";
import imagePath from "./Ratush-01.jpg";
import "../App.css";

export default function Image() {
  const [imageSize, setImageSize] = useState(600);
  const [imageDisplay, setImageDisplay] = useState("block");
  const [message, setMessage] = useState("");

  function addImageHandler() {
    setMessage("");
    if (imageDisplay === "block") {
      setMessage("The image is already visible");
    } else {
      setImageDisplay("block");
    }
  }
  function removeImageHandler() {
    setMessage("");
    if (imageDisplay === "none") {
      setMessage("The image is already unvisible");
    } else {
      setImageDisplay("none");
    }
  }
  function increaseHandler() {
    setMessage("");
    if (imageSize < 600) {
      setImageSize(imageSize + 50);
    } else {
      setMessage("The image is big enough");
    }
  }
  function decreaseHandler() {
    setMessage("");

    if (imageSize > 200) {
      setImageSize(imageSize - 50);
    } else {
      setMessage("The image is small enough");
    }
  }
  return (
    <div className="Image">
      <img
        src={imagePath}
        alt="town image"
        style={{ width: imageSize + "px", display: imageDisplay }}
      />
      <div className="image__buttons">
        <button onClick={addImageHandler}>Add</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={removeImageHandler}>Remove</button>
      </div>
      <div className="image__msg">{message}</div>
    </div>
  );
}
