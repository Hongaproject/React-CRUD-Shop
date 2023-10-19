import { useState } from "react";
import data from "../data.js";
import Product from "./Product.jsx";

function Home () {

    const [productList, setProductList] = useState(data);

    return(
        <div>
            <h2>메인입니다.</h2>
            <p>product컴포넌트을 이용해서 가상 데이터를 가져와 화면에 보여지게 됩니다.</p>
            <ul>
                {
                    productList.map((list) => (
                        <Product 
                            key={list.id}
                            id={list.id}
                            title={list.title}
                            price={list.price}
                            description={list.description}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default Home;