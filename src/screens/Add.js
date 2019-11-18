import React from "react";
import styled from "styled-components";
import { setFlex, setRem } from "../styled/Styles";
import Section from "../styled/Section";
import AddForm from "../components/AddForm";
import SearchForm from "../components/SearchForm";

const Add = () => {
  return (
    <Section>
      <Wrapper>
        <div className="container">
        <AddForm title="Dodaj słowo" />
        </div>
        <div className="container">
        <SearchForm title="Sprawdź słowo" />
        </div>
        
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  grid-column: 2 /3;
  ${setFlex({ direction: "column" })};
  .container {
    width: 100%;
    margin-bottom: ${setRem(42)};
  }
`;

export default Add;
