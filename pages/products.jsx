import React from "react";
import Footer from "../components/Footer.jsx";
import {CardProduct, CardProductBig, CardProductMini, CardProductMedium, CardProductLopsided} from "../components/Card";

export default function Products() {
    return (
        <>
            <section className="flex flex-col items-center gap-7">
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


                <div className="flex justify-center w-80">
                    <h1 className="text-4xl lg:text-5xl border-b-2 border-black w-fit">Man T-shirts</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-7 lg:mx-5">
                    

                    <CardProductMedium title="New album is released!" desc="Click the button to listen on Spotiwhy app." btnText="Learn more"/>

                    <CardProductMedium title="New album is released!" desc="Click the button to listen on Spotiwhy app." btnText="Learn more"/>
                    
                </div>
                


                <div className="flex flex-col md:flex-row gap-7">
                    <CardProductLopsided title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" image="/imgs/hmgoepprod.jpg"/>
                    <CardProductLopsided title="Shoes!" desc="If a dog chews shoes whose shoes does he choose?" image="/imgs/hmgoepprod.jpg"/>
                </div>

                <div className="hidden lg:flex">
                    <CardProductBig/>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-8 mx-7">
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
