import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    {    console.log(productList)}
      {productList.map((item) => 
        <div key={item.id}>
          <Link to= {`/shop/${item.id}`}>{item.id} {item.title}</Link>  
        </div>
      )}
    </div>
  );
}

export default Shop;
