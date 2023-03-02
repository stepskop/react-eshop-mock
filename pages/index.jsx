import React, {useState, useEffect} from "react";
import {CardProduct, CardProductBig} from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Link from "next/link"

import {client, urlFor} from '../lib/client';

function Home({products}) {
    let allImages = products.image
    return (
        <>
            <section className="xl:hidden">
                <div className="welcome text-center w-80 mx-auto mt-4">
                    <div className="card bg-base-100 shadow-xl image-full">
                        <figure className="grayscale-0">
                            <img src="/imgs/title-image.jpeg" alt="Shoes"/>
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
                <CardProduct title={products.name} desc={products.desc} image={urlFor(allImages[0])}></CardProduct>
                <div className="carousel flex flex-col justify-center mt-10">
                    <Carousel images={allImages}></Carousel>
                    <Link href="/products" className="btn btn-primary w-32 mx-auto mt-5" role="button">
                        EXPLORE
                    </Link>
                </div>
                <div className="border-2 border-white rounded-2xl shadow-xl w-80 mx-auto mt-10 p-3 px-4">
                    <h3 className="pb-1.5 text-3xl">About us</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
                        quis neque nihil pariatur porro libero obcaecati fugiat architecto
                        maiores. Nesciunt nihil exercitationem voluptas ab dolor! Cum
                        laborum excepturi voluptatem?
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab
                        quis neque nihil pariatur porro libero obcaecati fugiat architecto
                        maiores. Nesciunt nihil exercitat
                    </p>
                </div>
            </section>
            <section className="xl:visible mb-5 relative ">
                <div className="mx-auto w-[90%] h-auto mt-6 relative z-15 ">
                    <img src="/imgs/title-image.jpeg" alt="Shoes"
                         className="relative z-1 w-[90vw] max-h-[90vh] border-2 border-white rounded-3xl shadow-xl "/>
                    {/*<h1 className="absolute z-10 text-[54px] pt-[25%] pl-[5%]">Welcome text here</h1>*/}
                </div>
                {/*<div*/}
                {/*    className="relative z-15 xl:w-[70%] lg:w-[80%] md:[90%] mx-auto mt-[15em] flex shadow-2xl border-2 border-transparent rounded-3xl">*/}
                {/*    <img src="/imgs/hmgoepprod.jpg"*/}
                {/*         className="border-0 border-transparent rounded-3xl max-h-[70vh] p-6 "/>*/}
                {/*    <div className="h-[100%] flex flex-col ml-40">*/}
                {/*        <h3 className="text-[5em]">Black T-shirt</h3>*/}
                {/*        <p className="text-2xl mt-4 w-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque*/}
                {/*            cupiditate, debitis dignissimos dolorem laboriosam non nulla qui similique sit? Cupiditate*/}
                {/*            magnam nam totam. Exercitationem ipsum molestiae placeat sequi tenetur!</p>*/}
                {/*        <button className="btn btn-primary mt-20 self-start text-xl px-10 ">Buy Now</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <CardProductBig/>
            </section>
            <Footer/>
        </>
    );
}

export default Home

export const getServerSideProps = async () => {
    const query = '*[_type == "product" && slug.current == "black-t"][0]'
    const products = await client.fetch(query)

    return {
        props: {products}
    }
}
