import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
    display: flex;
    height: 100px;
    border-bottom: 1px solid #d2d2d2;
    line-height: 50px;
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
    &:hover {
    color: #0192c7;
    transition: 0.5s;
  }
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
        </div>
    );
}

export default Header;