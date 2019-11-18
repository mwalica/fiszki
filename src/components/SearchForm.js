import React, { useState, useContext } from "react";
import styled from "styled-components";

import { setGradient, setFlex, setRem, setMedia } from "../styled/Styles";
import Input from "../styled/Input";
import ButtonSubmit from "../styled/ButtonSubmit";

import AppContext from "../context/context";




const SearchForm = ({ title }) => {

    const { state, dispatch } = useContext(AppContext);
    const [search, setSearch] = useState('');
    const [resultState, setResultState] = useState('');

    const handleChange = e => {
        e.persist();
        setSearch(prevSearch => prevSearch = e.target.value);
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        let result = null;
        switch(title) {
          case "Sprawdź słowo":
              result = state.words.find(word => word.english === search.trim().toLowerCase());
              break;
          case "Sprawdź zwrot":
              result = state.phrases.find(phrase=> phrase.english === search.trim().toLowerCase());
              break;
          default:
              result = null;
        }
        if(result) {
            setResultState(`w bazie znajduje się słowo <strong style="color: #ff6e40">${search}</strong>`);
        } else {
            setResultState(`w bazie nie znajduje się słowo <strong style="color: #4caf50">${search}</strong>`);
        }
      };
  return (
    <Wrapper>
      <div className="header">
        <div className="header-text">{title}</div>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="content">
          <Input
            onChange={handleChange}
            value={search}
            name="search"
            type="text"
            label="english word"
          />
          <div className="alert" dangerouslySetInnerHTML={{__html: resultState}} />
        </div>
        <div className="buttons">
          <ButtonSubmit type="submit" margin="20px" onSubmit={handleSubmit}>
            Sprawdź
          </ButtonSubmit>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  ${setMedia.desktop`
    width: 80%;
  `}
  ${setMedia.large`
    width: 70%;
  `}
  border-radius:  0 0 12px 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  background-color: white;
  .header {
    ${setGradient()};
    ${setFlex()};
    color: rgba(255, 255, 255, 0.9);
    padding: 4px;
    &-text {
      text-transform: uppercase;
    }
  }
  .content {
    ${setFlex({ direction: "column" })};
    padding: ${setRem(20)};
    font-size: ${setRem(22)};
   .alert {
     font-size: ${setRem(18)};
   }
  }
  form {
      width: 100%;
    }
  .buttons {
    ${setFlex()};
  }
`;

export default SearchForm;
