// DEPENDENCIES
import styled from 'styled-components';

export const FilterSearch = styled.div.attrs({
  'data-testid': 'filter-component',
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const FilterPages = styled.div`
  span {
    margin: 0 5px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > div button {
    margin-right: 10px;
  }
`;
