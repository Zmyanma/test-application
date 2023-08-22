import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          // backgroundColor: "red",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/info">Info</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
