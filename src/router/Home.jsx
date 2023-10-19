import { useState } from "react";
import data from "../data.js";
import Product from "./Product.jsx";
import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);

    h2{
        text-align: center;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    li{
        padding-bottom: 20px;
        list-style:none;
        margin: 10px;
    }
    li img{
        width: 300px;
        height: 200px;
        object-fit: cover;
    }
`

function Home () {

    const [productList, setProductList] = useState(data);

    return(
        <Main>
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
        </Main>
    );
}

export default Home;