import React from "react";
import "./App.css";
import Cards from "./components/Cards";
function App() {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  React.useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleResize);
  }, []);

  console.log(windowSize.innerWidth);
  console.log(windowSize.innerHeight);
  return (
    <div
      className="App"
      style={{
        width: windowSize.innerWidth + "px",
        height: windowSize.innerHeight + "px",
      }}
    >
      <Cards />
    </div>
  );
}

export default App;
