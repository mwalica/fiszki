import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { setFlex, setRem } from "../styled/Styles";
import Section from "../styled/Section";
import CardTest from "../components/CardTest";
import { ButtonSecondary } from '../styled/Button';

import AppContext from "../context/context";
import { shuffle } from 'lodash';

const TestPhrase = () => {

const { state, dispatch } = useContext(AppContext);
const phrasesArr = state.phrases.sort((a, b) => a.point - b.point).slice(0, 20);

const { method } = useParams();
console.log(phrasesArr);
  return (
    <Section>
      <Wrapper>
        <CardTest title={method} items={shuffle(phrasesArr)}/>
        <Link className="linkItem" to="/" >
        <ButtonSecondary margin="20px" >Zakończ</ButtonSecondary>
        </Link>
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  grid-column: 2 /3;
  ${setFlex({direction: "column"})};
  .linkItem {
    margin: ${setRem(40)};
  }
`;

export default TestPhrase;
