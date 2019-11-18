import React, {useContext} from "react";
import styled from "styled-components";
import Section from "../styled/Section";
import Card from '../components/Card';

import { setRem } from '../styled/Styles';

import AppContext from '../context/context';


const Home = () => {

  const { state } = useContext(AppContext);

  return (
    <Section>
      <Wrapper>
        <Card title="Słówka" testType="/testWord" wordLength={state.words.length}/>
        <Card title="Zwroty" testType="/testPhrase" wordLength={state.phrases.length}/>
      </Wrapper>
    </Section>
  );
};


const Wrapper = styled.div`
    grid-column: 2 /3;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-column-gap: ${setRem(48)};
`;
export default Home;
