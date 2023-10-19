import { Link } from "react-router-dom";

function Header () {
    return(
        <nav>
            <h1><Link to="/">쇼핑몰</Link></h1>
            <hr />
        </nav>
    );
}

export default Header;