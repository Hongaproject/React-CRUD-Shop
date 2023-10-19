import Product from './Product';


function Home ({product}) {

    return(
        <div>
            <Product product={product}/>
        </div>
    );
}

export default Home;