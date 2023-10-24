import { useParams } from "react-router-dom";


function Detail (props) {
    // Main서 보여지는 부분에 상세내용을 보여지는 부분입니다.
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