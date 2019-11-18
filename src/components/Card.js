import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setColor, setFlex, setFont, setRem } from "../styled/Styles";

import { Button } from "../styled/Button";
import Tag from "../styled/Tag";

const Card = ({ title, testType, wordLength }) => {
  const clickHandler = () => {
    console.log("click");
  };

  return (
    <Wrapper>
      <div className="header">
        <h3>{title}</h3>
        <Tag className="tag">{wordLength}</Tag>
      </div>

      <div className="buttons">
        <Link className="menuItem" to={`${testType}/pl - en`}>
          <Button margin="20px" clickHandler={clickHandler}>
            pl - en
          </Button>
        </Link>
        <Link className="menuItem" to={`${testType}/en - pl`}>
          <Button margin="20px" clickHandler={clickHandler}>
            en - pl
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 3px solid ${setColor.primary};
  border-radius: 12px 12px 0 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-bottom: ${setRem(36)};
  .header {
    ${setFlex()};
    position: relative;
    h3 {
      text-align: center;
      text-transform: uppercase;
      ${setFont.condensed};
    }
    .tag {
      position: absolute;
      top: 6px;
      right: 6px;
    }
  }

  .buttons {
    ${setFlex()};
  }
`;

export default Card;
