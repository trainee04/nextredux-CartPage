"use client";

import { add } from "@/Redux/CartSlice";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Home() {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch()
  const getproducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    getproducts();
  }, []);

const handleadd=(product)=>{
dispatch(add(product))
}
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={()=>handleadd(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
