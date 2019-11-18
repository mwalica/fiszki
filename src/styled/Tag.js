import styled from 'styled-components';
import { setColor, setRem } from './Styles';

const Tag = styled.div`
    display: inline-block; 
    background-color: ${setColor.successLight};
    color: rgba(255, 255, 255, 0.8);
    border-radius: 18px;
    font-size: ${setRem(12)};
    padding: 1px 10px;
`;

export default Tag;