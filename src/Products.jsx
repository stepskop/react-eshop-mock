import React, { useState, useEffect } from "react";

import { client } from "../lib/client.js";


export default function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    client.fetch('*[_type == "product"]').then((data) => setProducts(data))
  })

  return (
    <div>
      Our products: <br/>
      {products?.map((product) => product.name)}

    </div>
  );
}