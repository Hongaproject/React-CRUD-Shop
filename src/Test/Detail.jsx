import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCount, addItem } from "../app/store";


function Detail (props) {
    // Main서 보여지는 부분에 상세내용을 보여지는 부분입니다.
    const {id} = useParams();
    const state = useSelector((state)=> state);
    const dispatch = useDispatch();

    console.log(props.product); // 컴퓨터는 0부터 시작을 하기 때문에 데이터를 0으로 안두고 1로 시작을 하면 내용이 밀려서 나오게 됨.
    return(
        <div>
            <img src={`../img/product${id}.png`} alt="" />
            <h3>{props.product[id].title}</h3>
            <p>{props.product[id].price}</p>
            <p>{props.product[id].description}</p>
            {/* <button onClick={()=>{
                const index = state.product.findIndex((pd)=> pd.id === props.product.id);
                if(index < 0){
                    dispatch(addItem(props.product));
                } else {
                    dispatch(addCount(props.product.id));
                }
            }}>장바구니</button> */}
        </div>
    );
}

export default Detail;