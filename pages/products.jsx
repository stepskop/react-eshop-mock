import React, { useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import { CardProduct, CardProductBig, CardProductMini, CardProductMedium, CardProductLopsided } from "../components/Card";
import { client, urlFor } from '../lib/client';
import functions from "daisyui/src/colors/functions.js";
import linkFor from "../lib/linkGen.js";

export default function Products({ products }) {
    let prodSel = {
        prod1: products[0],
        prod2: products[1],
        prod3: products[2],
        prod4: products[3],
        prod5: products[4],
        prod6: products[5],
        prod7: products[6]
    }
    const [otherProd, setOtherProd] = useState([])  
    
    const { prod1, prod2, prod3, prod4, prod5, prod6, prod7 } = prodSel

    useEffect(() => {
        setOtherProd(products.splice(3))
    }, [])
    
    function imageFor(prod) {
        return urlFor(prod.image && prod.image[0])
    }
    
    // ponozky, kalhoty, tricko kratke, mikina, bunda, capka, klobouk
    return (
        <>
            <section className="flex flex-col items-center gap-7 pt-6">

                <div className="flex justify-center w-80">
                    <h1 className="text-4xl lg:text-5xl border-b-2 border-black w-fit">Our collection</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-7 lg:mx-5 px-2">


                    <CardProductMedium image={imageFor(prod1)} 
                        title={prod1.name} 
                        desc={prod1.desc} 
                        link={linkFor(prod1)} />

                    <CardProductMedium image={imageFor(prod2)} 
                        title={prod2.name} 
                        desc={prod2.desc} 
                        link={linkFor(prod2)} />

                </div>


                <div className="hidden lg:flex">
                    <CardProductBig
                     image={imageFor(prod3)} 
                     link={linkFor(prod3)} 
                     title={prod3.name}
                     desc={prod3.desc}/>
                </div>

                <div className="flex flex-row flex-wrap justify-center gap-8 mx-7 lg:max-w-[72rem]">
                    { otherProd?.map((prod,i) => <CardProductMini key={i} image={imageFor(prod)} title={prod.name} desc={prod.desc}link={linkFor(prod)}/>)}
                </div>
            </section>
            <Footer />
        </>
    );
}
export const getServerSideProps = async () => {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)
    products.sort(function(a, b) {
        var keyA = new Date(a._createdAt),
          keyB = new Date(b._createdAt);
        // Compare the 2 dates
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
    return {
        props: { products }
    }
}