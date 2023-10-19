import { Link } from "react-router-dom";

function Grid (props) {
    return(
        <div>
            <Link to={`/detail/:${props.product.id}`}>
                <img src={`../img/product${props.product.id}.png`} alt="" />
                <h3>{props.product.title}</h3>
            </Link>
            <p>{props.product.price}</p>
            <p>{props.product.description}</p>
        </div>
    );
}

export default Grid;