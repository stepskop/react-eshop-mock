import React from "react";
import Link from "next/link";
// import "../styles/App.css";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

export default function Navbar() {

    const { showCart, setShowCart, totalQnt } = useStateContext()

    return (
        <>
            <nav
                className="relative lg:w-[72rem] max-w-[97vw] md:w-[45rem] w-80 flex justify-around flex-row items-center mx-auto border-2 border-white rounded-2xl shadow-xl h-[55px]">
                <div className="lg:hidden">
                    <input type="checkbox" id="overlay-input" defaultChecked={false}/>
                    <label htmlFor="overlay-input" id="overlay-button">
                        <span></span>
                    </label>
                    <div id="overlay">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/story">Story</Link>
                            </li>
                            <li>
                                <Link href="/subscribe">Subscribe</Link>
                            </li>
                            <li>
                                <Link href="/privacy">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div>
                    <button><Link href="/"><img className="w-28" src="/imgs/big-logo.png" alt=""/></Link></button>
                </div>


                {/* Small */}
                <label htmlFor="my-drawer-4" className="cursor-pointer lg:hidden flex flex-row items-center gap-x-2 ">
                    <img
                        className="h-auto w-6"
                        src="/imgs/shopping-cart.svg"
                        alt=""
                    />
                    <p className="font-semibold text-xs">{totalQnt}</p>
                </label>

                <div className="hidden navText items-start gap-x-5 font-bold lg:flex">
                    
                    <button className=""><Link href="/">Home</Link></button>
                    <button className=""><Link href="/products">Products</Link></button>
                    <button className=""><Link href="/story">Story</Link></button>
                    <button className=""><Link href="/subscribe">Subscribe</Link></button>
                    <button className=""><Link href="/privacy">Privacy</Link></button>

                    {/* Big */}
                    <label htmlFor="my-drawer-4" className="cursor-pointer flex flex-row items-center gap-x-2 ">
                        <img
                            className="h-auto w-6"
                            src="/imgs/shopping-cart.svg"
                            alt=""
                        />
                        <p className="font-semibold text-xs">{totalQnt}</p>
                    </label>
                </div>
            </nav>
            
        </>
    );
}
