import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AppContext from "../context/context";

import { FooterButton, LogoutButton } from "../styled/FooterButton";

import { setColor, setRem, setFlex } from "../styled/Styles";

import firebase from "../firebase/firebase";

const Footer = () => {
  const { state, dispatch } = useContext(AppContext);

  const clickHandler = () => {
    console.log("yea");
  };

  const logoutHandler = () => {
    console.log("click");
    firebase
      .logout()
      .then(() => {
        dispatch({ type: "LOGOUT" });
        console.log("Logout success");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Wrapper>
       {state.user && (
        <Link className="menuItem" to="/addphrases">
          <FooterButton buttonIcon="add" clickHandler={clickHandler}>
            Dodaj zwrot
          </FooterButton>
        </Link>
      )}
      {state.user && (
        <Link className="menuItem" to="/add">
          <FooterButton buttonIcon="add" clickHandler={clickHandler}>
            Dodaj
          </FooterButton>
        </Link>
      )}
      {state.user && (
        <FooterButton buttonIcon="logout" clickHandler={logoutHandler}>
          Wyloguj
        </FooterButton>
      )}
      {!state.user && (
        <Link className="menuItem" to="/login">
          <LogoutButton buttonIcon="login">Zaloguj</LogoutButton>
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: ${setColor.backgroundGrey100};
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  padding: ${setRem()};
  color: ${setColor.backgroundGrey50};
  ${setFlex({ x: "flex-end" })};
  .menuItem {
    text-decoration: none;
  }
`;

export default Footer;
