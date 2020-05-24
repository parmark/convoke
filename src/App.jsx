import React from "react";
import { render } from "react-dom";
import "./style.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>Convoke</h1>
        <h3>A booster pack simulator for Magic the Gathering</h3>
      </header>
    </div>
  );
};

render(<App />, document.getElementById("root"));
