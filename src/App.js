import "./App.css";
import Timer from "./components/Timer";
import UserInput from "./components/UserInput";
import Words from "./components/Words";

function App() {
  return (
    <div className="container">
      <div className="word-section">
        <Words />
      </div>
      <div className="timer-section">
        <Timer />
      </div>
      <div className="input-section">
        <UserInput />
      </div>
    </div>
  );
}

export default App;
