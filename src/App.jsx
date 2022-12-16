import {useState} from "react";
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
                    <img className="w-8 h-auto" src="../imgs/burger.svg" alt=""/>
                </div>
                <div className="w-32 my-2">
                    <img
                        className="saturate-0 h-auto"
                        src="../imgs/big-logo.png"
                        alt=""
                    />
                </div>
                <div className="flex flex-row items-center gap-x-2 pr-5">
                    <img className="h-auto" src="../imgs/shopping-cart.svg" alt=""/>
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
                    <img className="" src="../imgs/hmgoepprod.jpg" alt=""/>
                    <div className="absolute z-10 flex justify-self-end">
                        <button className="button button--big flex">Buy Now</button>
                    </div>
                </div>

                {/* carousel ------------------------------------------------------------------------------------------------*/}
                <div className="carousel flex flex-col justify-center mt-10">
                    <Carousel/>
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
            <footer className="mt-14 mx-4">

                <div className="flex flex-row  gap-x-14 gap-y-3.5 mb-4">
                    <div className="border-dotted  border-black pb-2 pt-2 border-t-2">
                        <h6 className="font-bold text-lg">Contact Us</h6>
                        <p>testingmail@mail.xyz</p>
                        <p>+420700700700</p>
                        <p>Na pamlsku 12, Praha 1</p>
                    </div>
                    <div className="border-dotted  border-black pb-2 pt-2 border-t-2">
                        <h6 className="font-bold text-lg">Follow Us</h6>
                        <p>Instagram</p>
                        <p>TikTok</p>
                        <p>Facebook</p>
                    </div>
                </div>
                <div className="">
                    {/*<img className="w-32" src="../imgs/big-logo.png" alt=""/>*/}
                    <p className="opacity-60">Copyright © 2022 Blendade All rights reserved</p>
                </div>
                <div className="flex flex-row gap-x-1 flex-wrap opacity-75">
                    <p className=" border-r border-gray-300 pr-2 mr-2">Privacy Policy</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Terms of Use</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Refunds</p>
                    <p className=" border-r border-gray-300 pr-2 mr-2">Credits</p>
                    <p className="">Legal</p>
                </div>

            </footer>
        </main>
    );
}

export default App;
