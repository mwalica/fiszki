import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { setGradient, setFlex, setRem, setMedia } from "../styled/Styles";
import Input from "../styled/Input";
import ButtonSubmit from "../styled/ButtonSubmit";

import ValidateAdd from "../helpers/ValidateAdd";
import AppContext from "../context/context";

import firebase from "../firebase/firebase";

const INIT_STATE = {
  english: "",
  polish: ""
};

const AddForm = ({ title }) => {
  const { state, dispatch } = useContext(AppContext);
  const [values, setValues] = useState(INIT_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        title === "Dodaj słowo" ? handleAddNewWord() : handleAddNewPhrase();
        setIsSubmitting(false);
      } else {
        console.log(Object.keys(errors));
        setIsSubmitting(false);
      }
    }
  }, [errors])

  const handleAddNewWord = () => {
    if (!state.user) {
      history.push("/login");
    } else {
      const { english, polish } = values;
      const newWord = {
        english,
        polish,
        point: 100,
        created: Date.now()
      };
      firebase.db
        .collection("words")
        .add(newWord)
        .then(res => {
          dispatch({ type: "ADD_WORD", payload: newWord });
          history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  const handleAddNewPhrase = () => {
    if (!state.user) {
      history.push("/login");
    } else {
      const { english, polish } = values;
      const newPhrase = {
        english,
        polish,
        point: 100,
        created: Date.now()
      };
      firebase.db
        .collection("phrases")
        .add(newPhrase)
        .then(res => {
          dispatch({ type: "ADD_PHRASE", payload: newPhrase });
          history.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  const handleChange = e => {
    e.persist();
    setValues(prevValue => ({ ...prevValue, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const validateErrors = ValidateAdd(values);
    setErrors(validateErrors);
    setIsSubmitting(true);
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
            value={values.english}
            name="english"
            type="text"
            label="english word"
            error={errors.english}
          />
          <Input
            onChange={handleChange}
            value={values.polish}
            name="polish"
            type="text"
            label="polskie słowo"
            error={errors.polish}
          />
        </div>
        <div className="buttons">
          <ButtonSubmit type="submit" margin="20px" onSubmit={handleSubmit}>
            Dodaj
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
    form {
      width: 100%;
    }
  }
  .buttons {
    ${setFlex()};
  }
`;

export default AddForm;
