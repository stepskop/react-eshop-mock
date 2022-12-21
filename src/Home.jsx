import React from "react";
import { CardProduct } from "./components/card";
import Carousel from "../src/components/carousel";
import "../src/styles/App.css";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <section>
        <div className="welcome text-center w-80 mx-auto mt-4">
          <div className="card bg-base-100 shadow-xl image-full">
            <figure className="grayscale-0">
              <img src="../src/assets/imgs/title-image.jpeg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h1 className="card-title font-normal">Welcome to our site!</h1>
              <p>We are simple brand with even simplier products</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Latest drops</button>
              </div>
            </div>
          </div>
        </div>
        <CardProduct></CardProduct>
        <div className="carousel flex flex-col justify-center mt-10">
          <Carousel image="../src/assets/imgs/hmgoepprod.jpg"></Carousel>
          <button className="btn btn-primary w-32 mx-auto mt-5" role="button">
            Explore
          </button>
        </div>
        <div className="border-2 border-white rounded-2xl shadow-xl w-80 mx-auto mt-10 p-3 px-4">
          <h3 className="pb-1.5 text-3xl">About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
            quis neque nihil pariatur porro libero obcaecati fugiat architecto
            maiores. Nesciunt nihil exercitationem voluptas ab dolor! Cum
            laborum excepturi voluptatem?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
            quis neque nihil pariatur porro libero obcaecati fugiat architecto
            maiores. Nesciunt nihil exercitat
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
}
