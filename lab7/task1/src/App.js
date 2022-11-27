import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import Image2 from "./components/Image2";

function App() {
  return (
    <div className="App">
      <Image2 />
      <Header />
      <Content />
      <Image />
    </div>
  );
}

export default App;
