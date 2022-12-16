import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Carousel from "../components/carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col justify-between">
      {/* navbar ------------------------------------------------------------------------------------------------*/}
      <nav className="flex justify-between items-center mx-4 border-b border-black">
        <div className="pl-5">
          <img className="w-8 h-auto" src="../imgs/burger.svg" alt="" />
        </div>
        <div className="w-32 my-2">
          <img
            className="saturate-0 h-auto"
            src="../imgs/big-logo.png"
            alt=""
          />
        </div>
        <div className="flex flex-row items-center gap-x-2 pr-5">
          <img className="h-auto" src="../imgs/shopping-cart.svg" alt="" />
          <p className="font-semibold">0</p>
        </div>
      </nav>
      {/* welcome here ------------------------------------------------------------------------------------------------*/}
      <section>
        <div className="welcome relative text-center w-80 mx-auto mt-10">
          <h1 className="">
            Welcome to our site!
            {/* absolute left-1/4 top-1/3 text-red-600 font-bold w-2/4 text-3xl */}
          </h1>

          {/* absolute bottom-0 left-0 */}
          <img
            className=""
            src="../imgs/title-image.jpeg"
            alt=""
            // grayscale transition duration-150 ease-in hover:grayscale-0 transition duration-150 ease-out
          />

          <button class="button button--big">Latest Drops</button>
        </div>
        {/* some text here ------------------------------------------------------------------------------------------------*/}
        <div className="product relative text-center w-80 mx-auto mt-10">
          <h2 className="">
            {/* absolute left-1/4 top-1/2 text-red-600 font-bold w-2/4 text-3xl */}
            Basic Black One
          </h2>
          <img className="" src="../imgs/hmgoepprod.jpg" alt="" />
        </div>
        <div className="flex justify-end w-80 mx-auto">
          <button className="button button--big flex">Buy Now</button>
        </div>
        {/* carousel ------------------------------------------------------------------------------------------------*/}
        <div className="carousel flex flex-col justify-center mt-10">
          <Carousel />
          <button className="button button--big w-32 mx-auto mt-5" role="button">
            Explore 
          </button>
        </div>
        {/* about us ------------------------------------------------------------------------------------------------*/}
        <div className="border-2 border-white shadow-xl rounded w-80 mx-auto mt-10 p-2.5 px-4">
          <h3 className="text-xl pb-1.5">About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
            quis neque nihil pariatur porro libero obcaecati fugiat architecto
            maiores. Nesciunt nihil exercitationem voluptas ab dolor! Cum
            laborum excepturi voluptatem?
          </p>
        </div>
      </section>
      {/* footer ------------------------------------------------------------------------------------------------*/}
      <footer className="mt-10 border-t border-black mx-4">
        <div className="flex flex-col items-center pt-3">
          <img className="w-32" src="../imgs/big-logo.png" alt="" />
          <p>C Blendade 2022</p>
        </div>
        <div className="flex flex-row justify-center gap-x-14">
          <div>
            <h6>Contact Us</h6>
            <p>Email</p>
            <p>Telephone</p>
            <p>Address</p>
          </div>
          <div>
            <h6>Follow Us</h6>
            <p>Instagram</p>
            <p>Instagram</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="flex justify-evenly">
          <p>Privacy</p>
          <p>Cookies</p>
          <p>Terms of Use</p>
          <p>Credits</p>
          <p>Refunds</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
