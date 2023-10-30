import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteCount, minusCount } from "../app/store";
import styled from "styled-components";

const Main = styled.div`
    min-height: calc(100vh - 300px);
    padding: 50px;
    th, td { 
        border-bottom: 2px solid orange;
        text-align: center;
        padding: 10px;
    }
    table { 
        border-collapse: collapse; 
        width: 50%;
        margin: 0 auto; 
    }    
`

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
        <Main>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>갯수</th>
                        <th>추가</th>
                        <th>빼기</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket.product.map((item, index) => (
                            <tr key={index}>
                                <td>{basket.product[index].title}</td>
                                <td>{basket.product[index].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(addCount(basket.product[index].id));
                                    }}>+</button>
                                </td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(minusCount(basket.product[index].id));
                                    }}>-</button>
                                </td>
                                <td>
                                    <button onClick={(e)=>{
                                        dispatch(deleteCount(basket.product[index].id));
                                    }}>X</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Main>
    );
}

export default Basket;