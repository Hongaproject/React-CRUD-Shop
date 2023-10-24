import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../app/store";

function Basket () {

    let basket = useSelector((state)=> state); 
    // initialState로 지정해준 state들을 꺼내온다.
    // reducer설정을 product: 로 해줘서 product를 가져와야지 내용이 나온다.

    // basket.product는 store.js에 있는 products부분 내용을 가져온다.

    console.log(basket);

    let dispatch = useDispatch();
    
    return(
        <div>
            <h3>{basket.user.name}</h3>
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
                        basket.cart.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.count}</td>
                                <button onClick={() => {
                                    dispatch(changeCount(item.id))
                                }}>+</button>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Basket;