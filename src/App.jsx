import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div>
        <Bulb />
        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
