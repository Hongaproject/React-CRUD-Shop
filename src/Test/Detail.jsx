import { useParams } from "react-router-dom";


function Detail (props) {

    const {id} = useParams();

    return(
        <div>
            <img src={`../img/product${id}.png`} alt="" />
            <h3>{props.product[id].title}</h3>
            <p>{props.product[id].price}</p>
            <p>{props.product[id].description}</p>
        </div>
    );
}

export default Detail;