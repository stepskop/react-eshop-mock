import React from "react";
import { Link } from "react-router-dom";
import "./styles/App.css";

export default function Navbar() {
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/story">Story</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button><Link to="/"><img className="w-28" src="../src/assets/imgs/big-logo.png" alt="" /></Link></button>
        
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
  );
}
