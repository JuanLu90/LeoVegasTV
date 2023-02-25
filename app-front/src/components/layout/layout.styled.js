// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div`
  > div {
    width: 100%;
  }

  .nav {
    position: sticky;
    top: 0;
    height: 45px;
    background-color: blue;
    z-index: 1;
  }

  .main {
    overflow-y: auto;
  }
`;
