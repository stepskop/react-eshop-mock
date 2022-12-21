import React from "react";
import "../src/styles/App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Story from "./Story";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Privacy from "./Privacy.jsx";

function App() {
    return (
        <BrowserRouter>
            <main className="flex flex-col justify-between">
                <Navbar></Navbar>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/story" element={<Story/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/privacy" element={<Privacy/>}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
