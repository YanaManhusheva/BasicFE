import { useState } from "react";
import imagePath from "./Ratush-01.jpg";
import "../App.css";

export default function Image() {
  const [imageSize, setImageSize] = useState(600);
  const [message, setMessage] = useState("");
  const [isVisible, setVisible] = useState(false);

  function addImageHandler() {
    console.log(isVisible);
    setMessage("");
    if (isVisible) {
      setMessage("The image is already visible");
    } else {
      setVisible(true);
    }
  }
  function removeImageHandler() {
    setMessage("");
    if (!isVisible) {
      setMessage("The image is already unvisible");
    } else {
      setVisible(false);
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
    <div className="Image2">
      {isVisible && (
        <img
          src={imagePath}
          alt="town view"
          style={{ width: imageSize + "px" }}
        />
      )}

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
