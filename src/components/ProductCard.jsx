import React from "react";
import { Link } from "react-router-dom";


function ProductCard({item}) {
  return (
    <div className="card h-100" style={{width: "24rem"}}>
    <Link  style={{color:"gray",textDecoration:"none"}} to={`/shop/${item.id}`}>
    <div className="h-80">
      <img style={{width:"12rem"}} src={item.image} class="card-img-top p-2 " alt="productImage" /></div>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
        {item.description}
        </p>
      </div>
      </Link>
    </div>
  );
}

export default ProductCard;
