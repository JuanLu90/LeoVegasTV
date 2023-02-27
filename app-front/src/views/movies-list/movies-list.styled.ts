import styled from 'styled-components';

export const MoviesListWrapper = styled.div.attrs({
  'data-testid': 'movies-list-component',
})`
  margin: 15px;
`;

export const MoviesResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;
