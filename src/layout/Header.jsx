import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
`

const Title = styled.div`
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    color: black;
`

const Blockquote = styled.div`
    border-left-width: 4px;
    border: 1px solid gray;
    margin: 20px;
    background-color: gray;
`

function Header () {
    return(
        <div>
            <Nav>
                <Link to="/" style={{ textDecoration: "none" }}><Title>쇼핑몰</Title></Link>
                <Blockquote><p></p></Blockquote>
                <Link to="/basket" style={{ textDecoration: "none" }}><Title>장바구니</Title></Link>
            </Nav>
            <hr />
        </div>
    );
}

export default Header;