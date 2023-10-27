import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCount, addItem } from "../app/store";
import { useEffect } from "react";


function Detail (props) {
    // Main서 보여지는 부분에 상세내용을 보여지는 부분입니다.
    const {id} = useParams();
    const state = useSelector((state)=> state);
    const dispatch = useDispatch();

    console.log(props.product); // 컴퓨터는 0부터 시작을 하기 때문에 데이터를 0으로 안두고 1로 시작을 하면 내용이 밀려서 나오게 됨.

    useEffect(() => { // 최근 본 상품을 넣기위해 사용함. 
        let getlocal = localStorage.getItem("title"); // 변수 선언 후 할당을 해줍니다. 출력
        console.log(getlocal);

        if (getlocal == null) {
           getlocal = []; // 아무것도 없으면 빈배열 추가해줌.
         } else {
           getlocal = JSON.parse(getlocal); // 배열안에 내용이 있으면 JSON.parse변환시켜 getlocal에 저장한다.
           // JSON은 JavaScript에서 파생이 된 데이터 포맷입니다.
           // json과 javascript문법이 약간 다른데요 json -> javascript로 변환 할 때 JSON.parse로 변환시켜 줍니다.
           // 변환을 시켜주는 이유는 json으로 props.product[id].title가져오게 되면 문법이 달라서 가져올 수 없기 때문에
           // 변환을 먼저 주어 JS문법으로 받아오고 다시 JSON으로 주기 위해 stringify를 사용해서 JSON으로 다시 변환을 시켜줍니다.
           // json은 []를 사용해서 속성에 접근 할 수 없습니다.
         }
         getlocal.push(props.product[id].title); // 상세페이지에서 접속을 하면 ()부분을 가져와 push로 넣어준다.
         getlocal = new Set(getlocal); // set함수를 사용해서 중복을 제거해준다. 이 부분은 배열에 추가한 내용이 있으면 또 추가를 안해준다는 뜻
         getlocal = [...getlocal]; // spread문법을 사용해서 내용을 복사해주고
         localStorage.setItem("title", JSON.stringify(getlocal)); // getlocal로 다시 넣어줍니다. 저장.
         // 로컬스토리지는 문자열만 저장이 가능하기 때문에 parse로 변환 된 내용을 stringify로 감싸주어 문자열로 변환하여 저장합니다.
    }, []);

    // localstorage 사용 방법
    // 저장 방법 localStorage.setItem("")
    // 출력 방법 localStorage.getItem("")
    // 삭제 방법 localStorage.removeItem("")

    return(
        <div>
            <img src={`../img/product${id}.png`} alt="" />
            <h3>{props.product[id].title}</h3>
            <p>{props.product[id].price}</p>
            <p>{props.product[id].description}</p>
            <button onClick={()=>{
                const index = state.product.findIndex((pl)=> pl.id === props.product[id].id);
                if(index < 0){
                    dispatch(addItem(props.product[id]));
                } else {
                    dispatch(addCount(props.product[id].id));
                }
            }}>장바구니</button>
        </div>
    );
}

export default Detail;