import Grid from "./Grid";


function Main (props) {
    return(
        <div>
            <div>
                <h2>main부분</h2>
            </div>
            <div>
            {
                props.product.map((list, index) => {
                return(
                    <Grid product={props.product[index]} key={index}/>
                );
                })
            }
            </div>
        </div>
    );
}

export default Main;