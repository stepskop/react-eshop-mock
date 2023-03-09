import React from "react";
import Footer from "../components/Footer.jsx";
import {CardProduct, CardProductBig, CardProductMini} from "../components/Card";

export default function Products() {
    return (
        <>
            <section className="flex flex-col items-center">
                <div className="lg:w-[72rem] max-w-[97vw] md:w-[32rem] w-80 mt-6 flex gap-x-2">
                    <button
                        className="rounded-[10px] bg-[#ffb7c1] px-6 py-[2px] hover:bg-[#ca858ec7] hover:ease-in-out hover:duration-200 active:scale-90 active:ease-in-out active:duration-200">
                        Men
                    </button>
                    <button
                        className="rounded-[10px] bg-[#ffb7c1] px-6 py-[2px] hover:bg-[#ca858ec7] hover:ease-in-out hover:duration-200 active:scale-90 active:ease-in-out active:duration-200">
                        Women
                    </button>
                </div>


                <div className="flex justify-center mt-6 w-80">
                    <h1 className="text-4xl lg:text-5xl border-b-2 border-black w-fit">Man T-shirts</h1>
                </div>
                <div className="flex flex-row justify-center">
                    
                    <div className="card lg:card-side bg-base-100 shadow-xl w-64 lg:w-[45%] mt-20">
                        <figure><img src="/imgs/hmgoepprod.jpg" alt="Album"/></figure>
                        <div className="card-body pl-0">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl w-64 lg:w-[45%] mt-20">
                        <figure><img src="/imgs/hmgoepprod.jpg" alt="Album"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="lg:hidden">
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
                
                <div className="lg:hidden">
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

                <div className="">
                    <CardProductBig/>
                </div>

                <div className="flex flex-row flex-wrap justify-center mt-20 ">
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
