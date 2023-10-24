import { Link } from "react-router-dom";

function List (props) {
    // Test 폴더 mainx부분에 내용을 보여지는 부분입니다.

    return(
        <div>
            <Link to={`/detail/${props.product.id}`}>
                <img src={`../img/product${props.product.id}.png`} alt="" />
                <h3>{props.product.title}</h3>
            </Link>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
        </div>
    );
}

export default List;