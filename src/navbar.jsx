import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="w-80 flex justify-around flex-row items-center mx-auto border-2 border-white rounded-2xl shadow-xl">
      <div>
        <input type="checkbox" id="overlay-input" />
        <label htmlFor="overlay-input" id="overlay-button">
          <span></span>
        </label>
        <div id="overlay">
          <ul>
            <li>
              {/* <a href="#">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              {/* <a href="#">Story</a> */}
              <Link to="../src/pages/story.jsx"></Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              {/* <a href="../components/privacies.jsx">Legal</a> */}
              <Link to="../src/pages/legal.jsx"></Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img className="w-28" src="../src/assets/imgs/big-logo.png" alt="" />
      </div>
      <div className="flex flex-row items-center gap-x-2 ">
        <img className="h-auto w-6" src="../src/assets/imgs/shopping-cart.svg" alt="" />
        <p className="font-semibold text-xs">0</p>
      </div>
    </nav>
  );
};
