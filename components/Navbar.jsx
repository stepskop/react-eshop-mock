import React from "react";
import Link from "next/link";
// import "../styles/App.css";

export default function Navbar() {

    return (
        <>
            <nav
                className="w-80 flex justify-around flex-row items-center mx-auto border-2 border-white rounded-2xl shadow-xl xl:hidden">
                <div>
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
                                <Link href="/contact">Contact</Link>
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
                <div className="flex flex-row items-center gap-x-2 ">
                    <img
                        className="h-auto w-6"
                        src="/imgs/shopping-cart.svg"
                        alt=""
                    />
                    <p className="font-semibold text-xs">0</p>
                </div>
            </nav>
            {/*<nav className="xl:hidden h-40 border-red-500 border-2 flex justify-between w-[90%]  absolute z-20">*/}
            {/*    <div>*/}
            {/*        <button><Link href="/"><img className="w-28" src="/imgs/big-logo.png" alt=""/></Link></button>*/}
            {/*    </div>*/}
            {/*    <div className="flex flex-row items-center gap-x-2 justify-self-end">*/}
            {/*        <img*/}
            {/*            className="h-auto w-6"*/}
            {/*            src="/imgs/shopping-cart.svg"*/}
            {/*            alt=""*/}
            {/*        />*/}
            {/*        <p className="font-semibold text-xs">0</p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button>Home</button>*/}
            {/*        <button>Products</button>*/}
            {/*        <button>Story</button>*/}
            {/*        <button>Contact</button>*/}
            {/*        <button>Privacy</button>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </>
    );
}
