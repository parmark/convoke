import React from "react";
import { render } from "react-dom";
import BoosterQuery from "./BoosterQuery.jsx";
import "./style.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>Convoke</h1>
        <h3>A booster pack simulator for Magic the Gathering</h3>
      </header>
      <BoosterQuery />
    </div>
  );
};

render(<App />, document.getElementById("root"));
