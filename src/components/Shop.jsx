import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Shop() {
  //onMount function
  useEffect(() => {
    fetchItems();
  }, []);

  const [productList, setProductList] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const items = await data.json();
    setProductList(items);
  };

  return (
    <div>
    
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-4 ">
      {productList.map((item) => (
        <div class="col p-2">
        <ProductCard
          className="col"
          item={item}
        />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Shop;
