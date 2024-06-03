import { useState } from "react";
import "./App.css";
import Counter from "./react-redux/components/Counter";
import Demo from "./react-redux/components/Demo";
import Todo from "./react-redux/components/Todo";
import CounterProvider from "./redux-toolkit/CounterProvider";
import JwtToken from "./JwtToken";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <Counter />
      <Todo />
      <Demo />
      <br />
      <br />
      <button onClick={() => setToggle(!toggle)}>
        {!toggle
          ? "Show Redux Toolkit Component"
          : "Hide Redux Toolkit Component"}
      </button>
      {toggle && <CounterProvider />}
      <JwtToken />
    </div>
  );
}

export default App;
