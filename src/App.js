import logo from "./logo.svg";
import "./styles/App.scss";
import CalculateTip from "./components/CalculateTip";

function App() {
  return (
    <div className="App">
      <h2 className="App__header">
        spli
        <br />
        tter
      </h2>
      <div className="App__card">
        <CalculateTip />
      </div>
    </div>
  );
}

export default App;
