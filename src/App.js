import logo from "./logo.svg";
import "./App.css";
import Terminal from "./components/Terminal";
import CodeWall from "./components/CodeWall";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ position: "relative" }}>
          <Terminal style={{ zIndex: 1 }} />
          <CodeWall style={{ zIndex: -1, top: "-50px" }} />
        </div>
      </header>
    </div>
  );
}

export default App;
