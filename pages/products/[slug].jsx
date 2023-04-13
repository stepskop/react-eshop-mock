import React, { useState, useEffect } from "react";
import { CardProduct } from "../../components/Card";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import { client, urlFor } from "../../lib/client";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useStateContext } from "../../context/StateContext";
import QuantitiySet from "../../components/QuantitySet";

export default function OneProduct({ product }) {

  const { qntAdd, qntMin, qnt, setSize, onAdd, selsize } = useStateContext()

  
  useEffect(() => {
    setSize(undefined)
  },[])
  

  if (product == null) return 404
  const { image, name, desc, price, size } = product
  
  return (
    <>
      <section className="w-80 mx-auto mt-6">
        <div>
          <h1 className="text-2xl text-center">{name}</h1>
        </div>
        <div className="w-64 mx-auto mt-2 flex flex-col items-center">
          <img
            className="shadow-xl rounded-[16px]"
            src={urlFor(image && image[0])}
          />
          <div className="flex flex-row mt-3 w-[100%] justify-start h-7">
            <p className="font-semibold text-lg">${price}</p>
            
          </div>

          <QuantitiySet size="w-[50%]" minFn={qntMin} plusFn={qntAdd} qnt={qnt}/>

          <div className="flex w-[100%]">
            <button onClick={()=>onAdd(product, qnt, selsize)} type="button" className="flex w-[50%] h-6 text-center justify-center rounded-[10px] bg-[#ffb7c1] hover:bg-[#ca858ec7] hover:ease-in-out hover:duration-200 active:scale-90 active:ease-in-out active:duration-200">
                add to cart
            </button>
          </div>

          <div className="flex flex-col mx-4 mt-3 w-[100%]">
            {/* <p className="font-semibold underline">Dostupné velikosti:</p> */}
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Dostupné velikosti</span>
              </label>
              <select onChange={(e) => setSize(e.target.value)} defaultValue="A" className="select select-bordered">
                <option value="A" disabled>Vyberte velikost...</option>
                {size?.map( (oneSize, i) => (<option key={i}>{oneSize}</option>)) }
              </select>
            </div>

          </div>
        </div>
        <div className="w-72 mx-auto mt-8 border-2 border-white rounded-2xl shadow-xl p-3 px-4 flex flex-col gap-y-3">
          <p>
            {desc}
          </p>
          <p>Bavlna 100%</p>
          <p>Vnější složení 80% polyester</p>
        </div>
      </section>

      

      <Footer />
    </>
  );
}
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`
  const products = await client.fetch(query)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))
  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`

  const product = await client.fetch(query)
  return {
      props: {product},
      revalidate: 10
  }
}