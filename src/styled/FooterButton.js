import React from "react";
import styled from "styled-components";

import { setFlex, setColor, setFont, setRem, setMedia } from "./Styles";

import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutlineRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";

export const FooterButton = ({ children, buttonIcon, clickHandler }) => {
  let icon = null;

  if (buttonIcon === "login") {
    icon = <ExitToAppRoundedIcon />;
  } else if (buttonIcon === "add") {
    icon = <AddCircleOutlineIcon />;
  } else if (buttonIcon === "logout") {
    icon = <ReplayRoundedIcon />;
  }

  return (
    <Wrapper onClick={clickHandler}>
      <div className="text">{children}</div>
      {icon}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border: none;
  color: ${setColor.backgroundGrey300};
  background: none;
  ${setFont.condensed};
  font-size: ${setRem(16)};
  text-transform: uppercase;
  ${setFlex()};
  margin: 0 ${setRem(12)};
  cursor: pointer;
  :focus {
    outline: none;
  }
  .text {
    margin-right: 1px;
    display: none;
    ${setMedia.tablet`
    display: inline-block;
  `}
  }
`;

export const LogoutButton = ({ children, buttonIcon, clickHandler }) => {
  let icon = null;

  if (buttonIcon === "login") {
    icon = <ExitToAppRoundedIcon />;
  } else if (buttonIcon === "add") {
    icon = <AddCircleOutlineIcon />;
  } else if (buttonIcon === "logout") {
    icon = <ReplayRoundedIcon />;
  }

  return (
    <WrapperLogout onClick={clickHandler}>
      <div className="text">{children}</div>
      {icon}
    </WrapperLogout>
  );
};

export const WrapperLogout = styled.button`
  border: none;
  color: ${setColor.backgroundGrey300};
  background: none;
  ${setFont.condensed};
  font-size: ${setRem(16)};
  text-transform: uppercase;
  ${setFlex()};
  margin: 0 ${setRem(12)};
  cursor: pointer;
  :focus {
    outline: none;
  }
  .text {
    margin-right: 1px;
    display: none;
    ${setMedia.tablet`
    display: inline-block;
  `}
  }
`;
