import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteCount, minusCount } from "../app/store";

function Basket () {

    let basket = useSelector((state)=> state); 
    // initialState로 지정해준 state들을 꺼내온다.
    // reducer설정을 product: 로 해줘서 product를 가져와야지 내용이 나온다.

    // basket.product는 store.js에 있는 products부분 내용을 가져온다.

    console.log(basket);

    let dispatch = useDispatch(); 
    // store.js부분에 있는 reducer부분 함수를 받아오기 위해 사용을 함.
    // 사용전 reducer에 있는 함수를 export로 action을 취해줘야지 불러와서 사용이 가능하다.
    
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>이름</td>
                        <td>숫자</td>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>{basket.product[0].id}</td>
                        <td>{basket.product[0].title}</td>
                        <td>{basket.product[0].count}</td>
                    </tr>
                    <tr>
                        <td>{basket.product[1].id}</td>
                        <td>{basket.product[1].title}</td>
                        <td>{basket.product[1].count}</td>
                    </tr> */}
                    {
                        basket.product.map((item, index) => (
                            <tr key={index}>
                                <td>{basket.product[index].id}</td>
                                <td>{basket.product[index].title}</td>
                                <td>{basket.product[index].count}</td>
                                <button onClick={()=>{
                                    dispatch(addCount(basket.product[index].id));
                                }}>+</button>
                                <button onClick={()=>{
                                    dispatch(minusCount(basket.product[index].id));
                                }}>-</button>
                                <button onClick={(e)=>{
                                    dispatch(deleteCount(e.target.parentElement));
                                }}>삭제하기</button>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Basket;