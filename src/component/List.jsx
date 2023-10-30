import { Link } from "react-router-dom";
import styled from "styled-components";

const Introduce = styled.div`
    margin: 10px;
    text-align: center;
`

const Title = styled.div`
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    color: black;
    margin: 10px;
    text-align: center;
`

function List (props) {
    // Test 폴더 mainx부분에 내용을 보여지는 부분입니다.

    return(
        <div>
            <Link to={`/detail/${props.product.id}`} style={{ textDecoration: "none" }}>
                <img src={`../img/product${props.product.id}.png`} alt="" />
                <Title>{props.product.title}</Title>
            </Link>
            <Introduce>
                <p>가격 : {props.product.price}</p>
                <p>{props.product.description}</p>
            </Introduce>
        </div>
    );
}

export default List;