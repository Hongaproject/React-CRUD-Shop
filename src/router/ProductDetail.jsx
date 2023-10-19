import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";

function ProductDetail () {

    const {id} = useParams();
    const [productList, setProductList] = useState(data);

    console.log(productList);
    return(
        <div>
            <img src={`../img/product${id}.png`} alt="" />
            <h3>{productList.title}</h3>
            <p>{productList.price}</p>
            <p>{productList.description}</p>
        </div>
    );
}

export default ProductDetail;