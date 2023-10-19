import { useParams } from "react-router-dom";
import data from "../data";

function ProductDetail () {

    const { id } = useParams();
    const shoe = data.filter((shoe) => shoe.id === Number(id));
    if (shoe.length === 0) {
        return (
        <div>
            <h3>해당 상품은 존재하지 않습니다.</h3>
        </div>
        );
    } else{
        return(
            <div>
                <div>
                    <img src={shoe[0].img} alt="" />
                </div>
                <h3>{shoe[0].title}</h3>
                <p>{shoe[0].price}</p>
                <p>{shoe[0].description}</p>
            </div>
        );
    }
}

export default ProductDetail;