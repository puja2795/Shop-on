import logo from './logo.svg';
import './App.css';
import { MainRoute } from './Routes/MainRoute';
import Navbar from './Components/Navbar/Navbar';
import { Subnav } from './Components/Navbar/Subnav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Subnav />
      <MainRoute/>
    </div>
  );
}

export default App;
