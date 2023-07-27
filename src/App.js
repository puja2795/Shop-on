import logo from "./logo.svg";
import "./App.css";
import { MainRoute } from "./Routes/MainRoute";
import Navbar from "./Components/Navbar/Navbar";
import { Subnav } from "./Components/Navbar/Subnav";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <MainRoute />
    </div>
  );
}

export default App;
