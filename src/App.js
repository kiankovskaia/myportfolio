import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Icons from "./components/Icons.js";
import Contact from "./components/Contact.js";
import Greeting from "./components/Greeting.js"


function App() {
  return (
    <div>
      <Navbar/>
      <Greeting/>
      <Header/>
      <Contact/>
      <Icons/>
    </div>
  );
}

export default App;
