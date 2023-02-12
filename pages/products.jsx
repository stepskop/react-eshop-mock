import React from "react";
import Footer from "../components/Footer.jsx";
import {CardProduct, CardProductMini} from "../components/Card";

export default function Products() {
    return (
        <>
            <section className="w-80 mx-auto">
                <div className="mt-6 flex gap-x-2">
                    <button
                        className="rounded-[10px] bg-[#ffb7c1] px-6 py-[2px] hover:bg-[#ca858ec7] hover:ease-in-out hover:duration-200 active:scale-90 active:ease-in-out active:duration-200">
                        Men
                    </button>
                    <button
                        className="rounded-[10px] bg-[#ffb7c1] px-6 py-[2px] hover:bg-[#ca858ec7] hover:ease-in-out hover:duration-200 active:scale-90 active:ease-in-out active:duration-200">
                        Women
                    </button>
                </div>
                <div className="mt-6 w-80 mx-auto">
                    <h1 className="text-4xl  border-b-2 border-black w-fit">Man T-shirts</h1>
                </div>
                <div className="flex flex-row">
                    <CardProductMini
                        image="/imgs/hmgoepprod.jpg"
                        title="basic black"
                        desc="you lookin' for something easy and special?"
                    ></CardProductMini>
                    <CardProductMini
                        image="/imgs/hmgoepprod.jpg"
                        title="basic black"
                        desc="you lookin' for something easy and special?"
                    ></CardProductMini>
                </div>
                <div>
                    <div className="card w-80 mt-10 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure>
                            <img src="/imgs/hmgoepprod.jpg" alt="Shoes"/>
                        </figure>
                    </div>
                </div>
                <div className="flex flex-row">
                    <CardProductMini
                        image="/imgs/hmgoepprod.jpg"
                        title="basic black"
                        desc="you lookin' for something easy and special?"
                    ></CardProductMini>
                    <CardProductMini
                        image="/imgs/hmgoepprod.jpg"
                        title="basic black"
                        desc="you lookin' for something easy and special?"
                    ></CardProductMini>
                </div>
                <div>
                    <div className="card w-80 mt-10 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure>
                            <img src="/imgs/hmgoepprod.jpg" alt="Shoes"/>
                        </figure>
                    </div>
                </div>
                <div className="flex flex-row">
                    <CardProductMini
                        image="/imgs/hmgoepprod.jpg"
                        title="basic black"
                        desc="you lookin' for something easy and special?"
                    ></CardProductMini>
                    <CardProductMini
                        image="/imgs/hmgoepprod.jpg"
                        title="basic black"
                        desc="you lookin' for something easy and special?"
                    ></CardProductMini>
                </div>
            </section>
            <Footer/>
        </>
    );
}
