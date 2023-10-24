import { Link } from "react-router-dom";

function Header () {
    return(
        <nav>
            <h1><Link to="/">쇼핑몰</Link></h1>
            <h2><Link to="/basket">장바구니</Link></h2>
            <hr />
        </nav>
    );
}

export default Header;