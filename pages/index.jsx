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
            <section className="flex flex-col gap-y-10">


                <div className="welcome text-center w-80 xl:w-[72rem] lg:w-[48rem] md:w-[32rem] mx-auto mt-10 mb-0">
                    <div className="card bg-base-100 shadow-xl image-full">


                        <div className="grayscale-0">
                            <img className="rounded-[1rem]" src="/imgs/title-image.jpeg" alt="Shoes"/>
                        </div>



                        <div className="card-body mt-0">
                            <h1 className="card-title font-normal">Welcome to our site!</h1>
                            <p>We are simple brand with even simplier products</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Latest drops</button>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="hidden xl:flex justify-center">
                    <CardProductBig/>
                </section>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5">
                    <CardProduct className="flex" title={products.name} desc={products.desc} image={urlFor(allImages[0])}></CardProduct>
                    
                    <div className="carousel flex flex-col justify-center">
                        <Carousel images={allImages}/>
                        <Link href="/products" className="btn btn-primary w-32 mx-auto mt-5" role="button">
                            EXPLORE
                        </Link>
                    </div>

                    <CardProduct imageCss="" className="flex" title={products.name} desc={products.desc} image={urlFor(allImages[1])}></CardProduct>
                </div>

                

                <div className="border-2 border-white rounded-2xl shadow-xl w-80 lg:w-[40rem] mx-auto mt-10 p-3 px-4">
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
