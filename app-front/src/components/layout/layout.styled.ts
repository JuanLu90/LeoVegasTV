// DEPENDENCIES
import styled from 'styled-components';

export const Wrapper = styled.div.attrs({
  'data-testid': 'layout-component',
})`
  > div {
    width: 100%;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 1;
  }
`;
