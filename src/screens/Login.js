import React from 'react';
import styled from 'styled-components';

import { setFlex } from '../styled/Styles';
import Section from '../styled/Section';
import LoginForm from '../components/LoginForm';



const Login = () => {

    return (
        <Section>
            <Wrapper>
                <LoginForm title="Logowanie"/>
            </Wrapper>
        </Section>
    );
};

const Wrapper = styled.div`
    grid-column: 2 /3;
    ${setFlex()};
`;



export default Login;
