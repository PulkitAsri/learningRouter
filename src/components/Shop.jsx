import React,{useState,useEffect} from 'react';

function Shop() {

    //onMount function
    useEffect(() => {
        fetchItems();
    }, []);

    const [productList,setProductList]=useState([]);
    const fetchItems = async ()=>{
        const data= await fetch(
            "https://fakestoreapi.com/products"
        );
        const items= await data.json();
        setProductList(items)
        console.log(productList);
    }



    return (
        <div>
            {productList.map((item,index)=>{
                return <div key={index}>{item.title}</div>
            })}
        </div>
    )
}

export default Shop
