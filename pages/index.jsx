import React, {useState, useEffect} from "react";
import { CardProduct } from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Link from "next/link"

import { client, urlFor } from '../lib/client';
function Home({ products }) {
  let allImages = products.image
  return (
    <>
      <section>
        <div className="welcome text-center w-80 mx-auto mt-4">
          <div className="card bg-base-100 shadow-xl image-full">
            <figure className="grayscale-0">
              <img src="/imgs/title-image.jpeg" alt="Shoes" />
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
            <br />
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
    props: { products }
  }
}
