import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Explore from "./components/Explorer/Explore";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
