// DEPENDENCIES
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;

  > div {
    width: 100%;
  }

  .nav {
    position: fixed;
    top: 0;
    height: 45px;
    background-color: blue;
  }

  .main {
    height: 100%;
    margin-top: 45px;
    background-color: green;
  }

  .footer {
    position: fixed;
    bottom: 0;
    background-color: yellow;
  }
`;
