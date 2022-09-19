import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseScreen from "./screens/baseScreen/BaseScreen";

function App() {
  // MAJ+alt+bottom-arrow: Duplicate line

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseScreen />} />
      </Routes>
    </div>
  );
}

export default App;
