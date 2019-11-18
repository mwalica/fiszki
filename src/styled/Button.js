import React from 'react';
import styled from 'styled-components';
import { setRem, setGradient, setFlex, setFont } from './Styles';

import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';


export const Button = ({ children, margin, clickHandler }) => {
    return (
        <Wrapper margin={margin} onClick={clickHandler}>
            <div className="text">{children}</div>
            <NavigateNextRoundedIcon className="icon"/>
        </Wrapper>
    );
};

const Wrapper = styled.button`
border: none;
${setFont.main}
font-size: ${setRem(16)};
display: inline-block;
${setGradient({color1: '#1976d2', color2: '#2196f3'})};
border-radius: 12px;
${setFlex()};
color: rgba(255, 255, 255, 0.8);
margin: 20px ${props => (props.margin ? props.margin : "6px") }; 
padding: 1px 12px;
padding-right: 0;
cursor: pointer;
text-transform: uppercase;
&:focus {
    outline: none;
}
`;


export const ButtonDanger = ({ children, margin, clickHandler }) => {
    return (
        <WrapperDanger margin={margin} onClick={clickHandler}>
            <div className="text">{children}</div>
            <NavigateNextRoundedIcon className="icon"/>
        </WrapperDanger>
    );
};

const WrapperDanger = styled.button`
border: none;
${setFont.main}
font-size: ${setRem(16)};
display: inline-block;
${setGradient({color1: '#DD2C00', color2: '#FF6E40'})};
border-radius: 12px;
${setFlex()};
color: rgba(255, 255, 255, 0.8);
margin: 20px ${props => (props.margin ? props.margin : "6px") }; 
padding: 1px 12px;
padding-right: 0;
cursor: pointer;
text-transform: uppercase;
&:focus {
    outline: none;
}
`;

export const ButtonSuccess = ({ children, margin, clickHandler }) => {
    return (
        <WrapperSuccess margin={margin} onClick={clickHandler}>
            <div className="text">{children}</div>
            <NavigateNextRoundedIcon className="icon"/>
        </WrapperSuccess>
    );
};

const WrapperSuccess = styled.button`
border: none;
${setFont.main}
font-size: ${setRem(16)};
display: inline-block;
${setGradient({color1: '#388E3C', color2: '#4CAF50'})};
border-radius: 12px;
${setFlex()};
color: rgba(255, 255, 255, 0.8);
margin: 20px ${props => (props.margin ? props.margin : "6px") }; 
padding: 1px 12px;
padding-right: 0;
cursor: pointer;
text-transform: uppercase;
&:focus {
    outline: none;
}
`;

export const ButtonSecondary = ({ children, margin, clickHandler }) => {
    return (
        <WrapperSecondary margin={margin} onClick={clickHandler}>
            <div className="text">{children}</div>
            <NavigateNextRoundedIcon className="icon"/>
        </WrapperSecondary>
    );
};

const WrapperSecondary = styled.button`
border: none;
${setFont.main}
font-size: ${setRem(16)};
display: inline-block;
${setGradient({color1: '#0D47A1', color2: '#1976D2'})};
border-radius: 12px;
${setFlex()};
color: rgba(255, 255, 255, 0.8);
margin: 20px ${props => (props.margin ? props.margin : "6px") }; 
padding: 1px 12px;
padding-right: 0;
cursor: pointer;
text-transform: uppercase;
&:focus {
    outline: none;
}
`;