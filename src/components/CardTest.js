import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";

import {
  setColor,
  setGradient,
  setFlex,
  setRem,
  setMedia
} from "../styled/Styles";
import { Button, ButtonDanger, ButtonSuccess } from "../styled/Button";


import firebase from "../firebase/firebase";

const CardTest = ({ title, items }) => {

  const location = useLocation();

  const [i, setI] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const checkWord = () => {
    console.log("yes, yes yes");
    setVisibility(true);
  }

  const nextWord = (word, num) => {
    word.point += num;
    console.log(title);
    if (num !== 0) {
      if(location.pathname[5] === "W") {
        firebase.db
        .collection("words")
        .doc(word.id)
        .update(word)
        .then(res => {
          console.log("db update");
          setI(prevI => prevI + 1);
          setVisibility(false);
        })
        .catch(err => {
          console.log(err);
        });
      } else if(location.pathname[5] === "P") {
        firebase.db
        .collection("phrases")
        .doc(word.id)
        .update(word)
        .then(res => {
          console.log("db update");
          setI(prevI => prevI + 1);
          setVisibility(false);
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        console.log("dupa");
      }

    } else {
      setI(prevI => prevI + 1);
      setVisibility(false);
    }
  }

  let filterWords = items.filter((word, index) => {
    return index === i;
  })

  return (
    <Wrapper>
      <div className="header">
        <div className="header-text">{title}</div>
      </div>
      {filterWords.map(word => (
        <div className="content" key={word.id}>
          <div className="content-question">{title === "en - pl" ? word.english : word.polish}</div>
          {visibility && <div className="content-answer">{title === "en - pl" ? word.polish : word.english}</div>}
        </div>
      ))}
      {!(i < items.length) && (
        <div className="content">
          <div className="message">Ćwiczenie zakończone</div>
        </div>
      )}
      <div className="buttons">
        {visibility ? (
          <>
            <ButtonDanger clickHandler={() => nextWord(filterWords[0], -2)}>
              Źle
            </ButtonDanger>
            <Button clickHandler={() => nextWord(filterWords[0], 0)}>
              Tak sobie
            </Button>
            <ButtonSuccess clickHandler={() => nextWord(filterWords[0], 1)}>
              Dobrze
            </ButtonSuccess>
          </>
        ) : (
          <Button margin="20px" clickHandler={i < items.length ? checkWord : () => setI(0)}>
            {i < items.length ? "Sprawdź" : "Jeszcze raz"}
          </Button>
        )}
      </div>
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

  }
  .content {
      ${setFlex({ direction: "column" })};
      margin-top: ${setRem(20)};
      padding-bottom: ${setRem(20)};
      font-size: ${setRem(22)};
      border-bottom: 1px solid ${setColor.backgroundGrey50};
      &-answer {
        margin-top: ${setRem(10)};
        color: ${setColor.warning};
        font-size: ${setRem(18)};
      }
  }
  .buttons {
    ${setFlex()};
  }
`;

export default CardTest;
