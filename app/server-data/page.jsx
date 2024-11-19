import axios from "axios";

async function fetchData(){
    let data = await axios.get("https://jsonplaceholder.typicode.com/posts/");
    return data?.data;
}

async function ServerData() {
    let products = await fetchData();
  return (
    <ul>
        {products?.map(product => {
            return <li className="border m-5 p-4" key={product.id}>{product.title}</li>
        })}
    </ul>
  )
}

export default ServerData