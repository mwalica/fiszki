import React from 'react';
import styled from 'styled-components';
import { setGradient, setFlex, setFont, setRem } from './Styles';

import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';





const ButtonSubmit = ({ children, margin }) => {
    return (
        <Wrapper margin={margin}>
            <div>{children}</div>
            <NavigateNextRoundedIcon className="icon"/>
        </Wrapper>
    );
};

const Wrapper = styled.button`
border: none;
display: inline-block;
${setFont.main}
font-size: ${setRem(16)};
${setGradient({color1: '#1976d2', color2: '#2196f3'})};
border-radius: 12px;
${setFlex()};
color: rgba(255, 255, 255, 0.8); 
margin: ${props => (props.margin ? props.margin : "6px") }; 
padding: 1px 12px;
padding-right: 0;
cursor: pointer;
text-transform: uppercase;
:focus {
    outline: none;
}
`;

export default ButtonSubmit;
