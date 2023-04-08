import React, {useState, useEffect, useMemo } from "react";
import {CardProduct, CardProductBig} from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Link from "next/link"
import linkFor from "../lib/linkGen";

import {client, urlFor} from '../lib/client';

function Home({products}) {
    let allImages = [];
    products.forEach(product => {
        product.image.forEach(singleImg => {
            allImages.push(singleImg)
        });
    });
    const [rnd1, setRnd1] = useState(0);
    const [rnd2, setRnd2] = useState(0);

    useEffect(() => {
      setRnd1(Math.floor(Math.random() * 3))
      setRnd2(Math.floor(Math.random() * (7 - 3) + 3))
    }, [])
    

    return (
        <>
            <section className="flex flex-col gap-y-10">


                <div className="welcome text-center w-80 xl:w-[72rem] lg:w-[48rem] md:w-[32rem] mx-auto mt-10 mb-0">
                    <div className="card bg-base-100 shadow-xl image-full">
                        
                        <div className="grayscale-0">
                            <img className="rounded-[1rem]" src="/imgs/title-image.jpeg" alt="Shoes"/>
                        </div>

                        <div className="card-body h-[100%] mt-0 md:text-2xl lg:text-3xl xl:text-4xl">
                            <h1 className="card-title md:text-3xl lg:text-4xl xl:text-6xl font-normal text-[#f3aec1] uppercase lg:mt-[25%]">Welcome to our site!</h1>
                            <p className="md:mt-4 lg:mt-8">We are simple brand with even simplier products</p>
                            <div className="card-actions justify-end">
                                <Link className="btn btn-primary" href="/products">Check out!</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <section className="hidden xl:flex justify-center">
                    <CardProductBig link="/products"/>
                </section> */}

                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5">
                    <CardProduct className="flex" link={linkFor(products[rnd1])} title={products[rnd1].name} desc={products[rnd1].desc} image={urlFor(products[rnd1].image && products[rnd1].image[0])}></CardProduct>
                    
                    <div className="carousel flex flex-col justify-center">
                        <Carousel images={allImages}/>
                        <Link href="/products" className="btn btn-primary w-32 mx-auto mt-5" role="button">
                            EXPLORE
                        </Link>
                    </div>

                    <CardProduct imageCss="" className="flex" link={linkFor(products[rnd2])} title={products[rnd2].name} desc={products[rnd2].desc} image={urlFor(products[rnd2].image && products[rnd2].image[0])}></CardProduct>
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
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)

    return {
        props: {products}
    }
}
