import "./App.css";
import Header from "./components/Header.js";
import Navbar from "./components/Nav.js";
import Icons from "./components/Icons.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Portfolio/>
      <Contact/>
      <Icons />
    </div>
  );
}

export default App;
