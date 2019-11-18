import { css } from "styled-components";

export const setColor = {
  primaryDark: "#0d47a1",
  primary: "#1976d2",
  primaryLight: "#2196f3",
  dangerDark: "#dd2c00",
  dangerLight: "#ff6e40",
  successDark: "#388e3c",
  successLight: "#4caf50",
  warning: "#ffab00",
  grey800: "#424242",
  backgroundGrey50: "#eceff1",
  backgroundGrey100: "#cfd8dc",
  backgroundGrey300: "#90a4ae"
};

export const setGradient = ({
  color1 = "#0d47a1",
  color2 = "#1976d2"
} = {}) => {
  return `background: linear-gradient(${color1}, ${color2})`;
};

export const setFont = {
  main: 'font-family: "Open Sans", sans-serif;',
  condensed: 'font-family: "Roboto Condensed", sans-serif;'
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setFlex = ({
  direction = "row",
  x = "center",
  y = "center"
} = {}) => {
  return `
        display: flex;
        flex-direction: ${direction};
        align-items: ${y};
        justify-content: ${x};
    `;
};

//media queries

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const setMedia = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
