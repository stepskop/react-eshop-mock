import React, { useState, useEffect } from "react";
import { CardProduct } from "./components/card";
import Carousel from "../src/components/carousel";
import "../src/styles/App.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function OneProduct() {
  return (
    <>
      <section className="w-80 mx-auto mt-4">
        <div>
          <h1>Ahoj</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
