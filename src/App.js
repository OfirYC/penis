import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // OFIR set ofir, EDEN set eden
    localStorage.setItem("ofir", "Penis in your butt");

    const edenStorage = localStorage.getItem("eden");
    const ofirStorage = localStorage.getItem("ofir");

    alert(`Eden: ${edenStorage} Ofir: ${ofirStorage}`);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
