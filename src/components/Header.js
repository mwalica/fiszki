import React from 'react';
import styled from 'styled-components';

import { setColor, setFlex, setRem, setGradient } from '../styled/Styles';

const Header = ({children}) => {
    return (
        <Wrapper>
            <h1>{children}</h1>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    height: 12vh;
    background-color: ${setColor.primaryDark};
    ${setGradient()};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    ${setFlex()};
    h1 {
        font-size: ${setRem(22)};
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
        text-transform: uppercase;
    }
`;

export default Header;
