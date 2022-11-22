import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { bizA, bizB, bizAconstB } from "@yvmt/core";

function App() {
  const [text, setText] = useState("Hello World");

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{text}</p>
        <button
          onClick={() => {
            setText(bizA());
          }}
        >
          bizA
        </button>
        <button
          onClick={() => {
            setText(bizAconstB());
          }}
        >
          bizAconstB
        </button>
        <button
          onClick={() => {
            setText(bizB());
          }}
        >
          bizB
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
