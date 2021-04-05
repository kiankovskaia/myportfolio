import "./App.css";
import Header from "./components/Header.js";
import Navbar from "./components/Nav.js";
import Icons from "./components/Icons.js";
import Contact from "./components/Contact.js";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Icons />
      <Contact/>
    </div>
  );
}

export default App;
