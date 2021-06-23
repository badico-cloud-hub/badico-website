import styled from 'styled-components';
import media from "styled-media-query";

export const NavWrapper = styled.nav`
    display: none;

    ${media.greaterThan('1024px')`
    display: flex;
    
    ul{
        display: flex;
        list-style: none;
    }

    ul li {
        display: flex;
        align-items: center;
        margin-right: 40px;
    }
    
    ul li .usaSvg{
        background-color: transparent;
    }

    ul li a {
        color: #FFFFFF;
        font-family: 'Roboto';
        text-decoration: none;
    }

    ${media.greaterThan('1920px')`
    
    ul li a{
        font-size: 20px;
    }
    `}
    `}
`