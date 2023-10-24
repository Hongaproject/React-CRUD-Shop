import { useSelector } from "react-redux";

function Basket () {

    let basket = useSelector((state)=> state) 
    // initialState로 지정해준 state들을 꺼내온다.
    // reducer설정을 product: 로 해줘서 product를 가져와야지 내용이 나온다.

    console.log(basket);
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
                    <tr>
                        <td>{basket.product[0].id}</td>
                        <td>{basket.product[0].title}</td>
                        <td>{basket.product[0].count}</td>
                    </tr>
                    <tr>
                        <td>{basket.product[1].id}</td>
                        <td>{basket.product[1].title}</td>
                        <td>{basket.product[1].count}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Basket;