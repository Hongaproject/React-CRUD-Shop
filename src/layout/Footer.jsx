import styled from "styled-components";

const Fter = styled.div`
    height: 100px;
    border-top: 1px solid #d2d2d2;
    line-height: 100px;
`

function Footer () {
    return(
        <Fter>
            &copy; {new Date().getFullYear()} HSW All Rights Reserved.
        </Fter>
    );
}

export default Footer;