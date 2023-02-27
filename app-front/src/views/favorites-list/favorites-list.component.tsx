// DEPENDENCIES
import React from 'react';

// COMPONENTS
import Card from '../../components/card/card.component';
import Loader from '../../components/loader/loader.component';

// HOOKS
import useMoviesListHook from '../movies-list/hooks/movies-list.hook';

// CONTEXT
import { useAppContext } from '../../context/app.context';

// STYLED-COMPONENTS
import {
  FavoritesListWrapper,
  FavoritesResultWrapper,
  FavoritesListTitle,
} from './favorites-list.styled';

const MoviesList: React.FC = (): React.ReactElement => {
  const { isFetching } = useMoviesListHook();

  const { favouriteMoviesListStoraged } = useAppContext();

  return (
    <FavoritesListWrapper>
      <FavoritesListTitle>Favorist List</FavoritesListTitle>
      {!isFetching && favouriteMoviesListStoraged.length > 0 ? (
        <FavoritesResultWrapper>
          {favouriteMoviesListStoraged.map((movie: any) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </FavoritesResultWrapper>
      ) : (
        <Loader />
      )}
    </FavoritesListWrapper>
  );
};

export default MoviesList;
