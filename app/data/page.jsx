// "use client";

// import {useEffect, useState} from "react";

// function Data() {
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         async function fetchData(){
//             try{
//                 let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//                 let result = await data.json();
//                 setProducts(result);
//             }
//             catch(err){
//                 setError(err);
//             }   
//         }
//         fetchData();
//     }, []);

//   return (
//     <>
//         {products.map(product => {
//             return (
//                 <div className="border border-black rounded-md m-2" key={product.id}>
//                     <h6>{product.id}</h6>
//                     <h6>{product.body}</h6>
//                     <h6>{product.title}</h6>
//                     <h6>{product.userId}</h6>
//                 </div>
//             )
//         })}
//     </>
//   )
// }

// export default Data;

async function fetchData(){
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let result = await data.json();
    return result;
}

async function Data() {
    let products = await fetchData();
    console.log(products);
  return (
    <>
        {products?.map(product => {
            return (
                <ul className="border border-black m-5" key={product.id}>
                    <li>{product.body}</li>
                    <li>{product.title}</li>
                </ul>
            )
        })}
    </>
  )
}

export default Data