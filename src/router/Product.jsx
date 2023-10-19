import { Link } from "react-router-dom";

function Product ({id, title, price, description}) {

    return(
        <li>
            <Link to={`/pdetail/:${id}`}>
                <img src={`../img/product${id}.png`} alt="" />
                <h3>{title}</h3>
            </Link>
            <p>{price}</p>
            <p>{description}</p>
        </li>
    );
}

export default Product;