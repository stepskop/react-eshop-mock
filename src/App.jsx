import React from "react";
import "../src/styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Story from "./Story";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="flex flex-col justify-between">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
