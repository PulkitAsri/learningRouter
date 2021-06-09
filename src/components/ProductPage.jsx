import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductPage({match}) {
  //onMount function
  useEffect(() => {
    fetchItem();
  }, []);

  const [product, setProduct] = useState({});


  const fetchItem = async () => {
    const data = await fetch("https://fakestoreapi.com/products/"+match.params.id);
    const item = await data.json();
    console.log(item)
    setProduct(item);
    
  };
  console.log(match.params.id);
  return (
    <div>
    <img style={{height:200}} src={product.image}  alt="product image"/>
    <h2>{product.title}</h2>
    <h5>{product.description}</h5>
    <h5>${product.price}</h5>
    <h5>Category={product.category}</h5>
      
    </div>
  );
}

export default ProductPage;
