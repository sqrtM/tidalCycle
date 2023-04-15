/// <reference path='./sound/SoundController.js' />

import React from "react";
import "./App.css";
import play from "./sound/SoundController";

function App() {
  return (
  <div>
    <input type="button" value="H" onClick={play} />
  </div>
  );
}

export default App;
