import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Icons from "./components/Icons.js";
import Greeting from "./components/Greeting.js";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting/>
      <Header/>
      <Projects/>
      <Icons/>
    </div>
  );
}

export default App;
