import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: calc(100vh - 100px);

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        img{
            width: 300px;
            height: 200px;
            object-fit: cover;
            margin: 10px;
        }
    }
    /* li{
        padding-bottom: 20px;
        list-style:none;
        margin: 10px;
    }
    li img{
        width: 300px;
        height: 200px;
        object-fit: cover;
    } */
`

const Text = styled.div`
     text-align: center;
`

function Product (props) {

    return(
        <Main>
            <Text>
                <h2>메인입니다.</h2>
                <span>product컴포넌트을 이용해서 가상 데이터를 가져와 화면에 보여지게 됩니다.</span>
            </Text>
            <ul>
                {
                    props.product.map((list, index) => {
                        return(
                            <div key={index}>
                                <img src={list.img} alt="" />
                                <h2>{list.title}</h2>
                                <p>{list.price}</p>
                                <p>{list.description}</p>
                            </div>
                        );
                })}
            </ul>
        </Main>
    );
}

export default Product;