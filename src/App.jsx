import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "../src/styles/App.css";
import Navbar from "./Navbar";
import Home from "../src/pages/Home";
import Story from "../src/pages/Home";
import Legal from "../src/pages/Home";

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav className="w-80 flex justify-around flex-row items-center mx-auto border-2 border-white rounded-2xl shadow-xl">
          <div>
            <input type="checkbox" id="overlay-input" />
            <label htmlFor="overlay-input" id="overlay-button">
              <span></span>
            </label>
            <div id="overlay">
              <ul>
                <li><Link to="/">Home</Link> </li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Story</a>
                </li>
                <li><Link to="/Story">Story</Link></li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li><Link to="/Legal">Legal</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="w-28"
              src="../src/assets/imgs/big-logo.png"
              alt=""
            />
          </div>
          <div className="flex flex-row items-center gap-x-2 ">
            <img
              className="h-auto w-6"
              src="../src/assets/imgs/shopping-cart.svg"
              alt=""
            />
            <p className="font-semibold text-xs">0</p>
          </div>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Story">
            <Story />
          </Route>
          <Route path="/Legal">
            <Legal />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
