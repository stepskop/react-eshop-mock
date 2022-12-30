import React, { useState, useEffect } from "react";
import { CardProduct } from "./components/card";
import Carousel from "../src/components/carousel";
import "../src/styles/App.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function OneProduct() {
  return (
    <>
      <section className="w-80 mx-auto mt-6">
        <div>
          <h1 className="text-2xl text-center">Název produktu</h1>
        </div>
        <div className="w-64 mx-auto mt-2 ">
          <img
            className="shadow-xl rounded-[16px]"
            src="../src/assets/imgs/hmgoepprod.jpg"
          />
          <div className="flex flex-row mt-3 mx-4 justify-between items-center h-7">
            <p className="font-semibold text-lg">Cenovka</p>
            <button className="rounded-[10px] bg-[#ffb7c1] px-5 py-[1px] hover:bg-[#ca858ec7] hover:ease-in-out hover:duration-200 active:scale-90 active:ease-in-out active:duration-200">
              buy
            </button>
          </div>
          <div className="mx-4 mt-3">
            <p className="font-semibold underline">Dostupné velikosti:</p>
            <p className="tracking-widest ml-2"><span>XS</span> <span>S</span> <span>M</span> <span>L</span></p>
          </div>
        </div>
        <div className="w-72 mx-auto mt-8 border-2 border-white rounded-2xl shadow-xl p-3 px-4 flex flex-col gap-y-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            neque animi itaque non provident, quia saepe facilis nesciunt fugiat
            ipsum aut ipsam corporis temporibus vel sint? Similique deleniti
            necessitatibus non.
          </p>
          <p>Bavlna 100%</p>
          <p>Vnější složení 80% polyester</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
