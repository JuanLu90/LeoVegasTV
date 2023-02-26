// DEPENDENCIES
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div.attrs({
  'data-testid': 'loader-component',
})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #5d1d1b;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  z-index: 999;
  overflow: show;
`;
