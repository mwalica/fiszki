import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { setColor, setRem, setFont, setMedia } from "./Styles";

const Input = ({ type, name, label, maxLength, error, ...props }) => {
  return (
    <Wrapper>
      <input
        className="input"
        type={type}
        name={name}
        id={name}
        maxLength={maxLength}
        placeholder=" "
        {...props}
      />
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="bar"></div>
      <div className="error">{error ? error : ' '}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: ${setRem(12)} 0;
  ${setMedia.desktop`
    margin: ${setRem(24)} 0;
  `}
  .bar {
    width: 100%;
    height: 1px;
    background: ${setColor.backgroundGrey50};
    transition: 0.1s all;
  }
  .error {
    font-size: ${setRem(12)};
    color: ${setColor.dangerLight};
    ${setFont.main};
    letter-spacing: 0.1rem;
    margin-top: ${setRem(4)};
  }
  .label {
    color: ${setColor.grey800};
    position: absolute;
    top: 1px;
    left: 0;
    font-size: 16px;
    ${setFont.main};
    transition: 0.2s ease-out all;
  }
  .input {
    width: 100%;
    color: ${setColor.grey800};
    font-size: ${setRem(16)};
    border: none;
    line-height: 22px;
    z-index: 10;
    ${setFont.main};
    &:focus {
      outline: none;
    }
    &:focus + .label {
      top: -22px;
      font-size: 13px;
    }
    &:not(:placeholder-shown) + .label {
      top: -22px;
      font-size: 13px;
    }
    &:focus ~ .bar {
      background: ${setColor.primary};
    }
  }
`;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number
};

Input.defaultProps = {
  type: "text",
  maxLength: 200
};

export default Input;
