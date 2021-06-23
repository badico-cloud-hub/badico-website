import React from 'react';
import USASvg from '../../../images/USA.svg'

import * as Styled from './style.js'

const NavDesktop = () => {
    return(
        <Styled.NavWrapper>
            <ul>
                <li>
                    <USASvg className="usaSvg"/>
                </li>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Success cases</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Podcast</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
            </ul>
        </Styled.NavWrapper>
    )
}

export default NavDesktop;