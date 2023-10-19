import Product from './Product';


function Home (props) {

    return(
        <div>
            <Product product={props.product}/>
        </div>
    );
}

export default Home;