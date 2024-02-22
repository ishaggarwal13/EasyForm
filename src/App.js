import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import FormAction from "./components/FormAction";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />{" "}
          <Route path="/Form" exact Component={FormAction} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
