"use client"

import { useEffect, useState } from "react"

function Data() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            let data = await fetch("https://jsonplaceholder.typicode.com/posts");
            data = await data.json();
            setProducts(data);
            console.log(data);
        }
        fetchData();
    }, []);

  return (
    <ul>
        {products?.map(product => {
            return <li key={product.id}>{product.id}</li>
        })}
    </ul>
  )
}

export default Data