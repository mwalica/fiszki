import styled from "styled-components";
import { setRem, setMedia } from "./Styles";

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    ${setMedia.desktop`
    grid-template-columns: 2fr 3fr 2fr;
  `}
    margin-top: ${setRem(36)};
`;

export default Section;
