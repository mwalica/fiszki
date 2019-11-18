import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from 'react-router';

import { setGradient, setFlex, setRem, setMedia } from "../styled/Styles";
import Input from "../styled/Input";
import ButtonSubmit from "../styled/ButtonSubmit";

import ValidateLogin from "../helpers/ValidateLogin";

import firebase from "../firebase/firebase";

const INIT_STATE = {
  email: "",
  password: ""
};

const LoginForm = ({ title }) => {
  const [values, setValues] = useState(INIT_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        loginUser();
        setIsSubmitting(false);
      } else {
        console.log(Object.keys(errors));
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const loginUser = async () => {
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      console.log("Login complete");
      history.push('/');
    } catch (err) {
      console.error("Authentication Error", err);
      let errors = {};
      if(err.code.includes("user")) {
        errors.email = "Nie ma takiego użytkownika";
      } else if(err.code.includes("password")) {
        errors.password = "Nieprawidłowe hasło";
      }
      await setErrors(errors);
    }
  };

  const handleChange = e => {
    e.persist();
    setValues(prevValue => ({ ...prevValue, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    const validateErrors = ValidateLogin(values);
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
            value={values.email}
            name="email"
            type="text"
            label="E-mail"
            error={errors.email}
          />
          <Input
            onChange={handleChange}
            value={values.password}
            name="password"
            type="password"
            label="Hasło"
            error={errors.password}
          />
        </div>
        <div className="buttons">
          <ButtonSubmit type="submit" margin="20px" onSubmit={handleSubmit}>
            Zaloguj
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

export default LoginForm;
