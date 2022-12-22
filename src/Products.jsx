import React from "react";
import Footer from "./Footer.jsx";
import {CardProduct} from "./components/card";
import Carousel from "./components/carousel";


export default function Products() {
    return (
        <>
            <section>
                <div>
                    <button>a</button>
                    <button>a</button>
                    <button>a</button>
                </div>
                <div>
                    <h1>Man T-shirts</h1>
                </div>
                <div className="flex flex-row">
                    <CardProduct/>
                    <CardProduct/>
                </div>
                <div>
                    <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure><img src="../src/assets/imgs/hmgoepprod.jpg" alt="Shoes"/></figure>
                    </div>
                </div>
                <div className="flex flex-row">
                    <CardProduct/>
                    <CardProduct/>
                </div>
                <div>
                    <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure><img src="../src/assets/imgs/hmgoepprod.jpg" alt="Shoes"/></figure>
                    </div>
                </div>
                <div className="flex flex-row">
                    <CardProduct/>
                    <CardProduct/>
                </div>
            </section>
            <Footer/>
        </>
    );
}
