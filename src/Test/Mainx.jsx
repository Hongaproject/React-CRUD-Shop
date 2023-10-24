import List from "./List";


function Mainx (props) {

    return(
        <div>
            <div>
                <h2>Test 폴더 mainx부분 입니다.</h2>
            </div>
            <div>
            {
                props.product.map((list, index) => {
                return(
                    <List product={props.product[index]} key={index}/>
                );
                })
            }
            </div>
        </div>
    );
}

export default Mainx;